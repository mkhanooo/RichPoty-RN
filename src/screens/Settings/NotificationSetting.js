import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
export default function NotificationSetting({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isSoundSwitchOn, setIsSoundSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSoundSwitch = () => setIsSoundSwitchOn(!isSoundSwitchOn);
  return (
    <ScrollView style={{ minHeight: 875 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={[styles.container, {}]}>
        <ImageBackground
          style={{ minHeight: 875 }}
          source={require("../../assets/logo-screeen-background.png")}
          resizeMode="cover"
        >
          <View style={styles.settingMainBox}>
            <View style={styles.settingTxtBox}>
              <Text style={styles.settingTxt}>Notification</Text>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.doneTxtBox}
              >
                <Text style={{ paddingRight: 15 }}>Done</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingBox}>
              <View style={styles.notificationBox}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <FontAwesome5 name="bell" size={22} color="#5E5E5E" />
                  <Text
                    style={{
                      fontFamily: "RubikRegular",
                      color: "#5E5E5E",
                      paddingLeft: 10,
                      fontSize: 16,
                    }}
                  >
                    Push Notification
                  </Text>
                </TouchableOpacity>
                <View style={styles.switchBox}>
                  <Switch
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                    color="red"
                  />
                </View>
              </View>
              <View style={styles.notificationBox}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <AntDesign name="sound" size={22} color="#5E5E5E" />
                  <Text
                    style={{
                      fontFamily: "RubikRegular",
                      color: "#5E5E5E",
                      paddingLeft: 10,
                      fontSize: 16,
                    }}
                  >
                    Sound Notification
                  </Text>
                </TouchableOpacity>
                <View style={styles.switchBox}>
                  <Switch
                    value={isSoundSwitchOn}
                    onValueChange={onToggleSoundSwitch}
                    color="red"
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
  settingMainBox: {
    marginTop: 35,
  },
  settingTxtBox: {
    marginTop: 20,
    marginLeft: 25,
    flexDirection: "row",
  },
  settingTxt: {
    fontFamily: "RubikSemiBold",
    fontSize: 20,
  },
  doneTxtBox: {
    position: "absolute",
    right: 10,
    top: 0,
  },
  settingBox: {
    marginTop: 40,
  },
  notificationBox: {
    marginLeft: 20,
    flexDirection: "row",
    marginTop: 20,
  },
  switchBox: {
    position: "absolute",
    right: 10,
    top: -12,
  },
});
