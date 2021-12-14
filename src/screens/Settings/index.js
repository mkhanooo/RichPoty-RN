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
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
export default function Setting({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
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
              <Text style={styles.settingTxt}>Setting</Text>
            </View>

            <View style={styles.settingListBox}>
              <View style={styles.notificationBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("NotificationSetting")}
                  style={styles.iconBox}
                >
                  <View style={styles.iconAndTxt}>
                    <FontAwesome name="bell-o" size={20} color="#5E5E5E" />
                    <Text style={styles.menuTxt}>Notification</Text>
                  </View>
                  <View style={styles.arrowIcon}>
                    <MaterialCommunityIcons
                      name="greater-than"
                      size={15}
                      color="#5E5E5E"
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.notificationBox}>
                <TouchableOpacity style={styles.iconBox}>
                  <View style={styles.iconAndTxt}>
                    <Ionicons
                      name="ios-shield-checkmark-outline"
                      size={20}
                      color="#5E5E5E"
                    />
                    <Text style={styles.menuTxt}>Privacy</Text>
                  </View>
                  <View style={styles.arrowIcon}>
                    <MaterialCommunityIcons
                      name="greater-than"
                      size={15}
                      color="#5E5E5E"
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.notificationBox}>
                <TouchableOpacity style={styles.iconBox}>
                  <View style={styles.iconAndTxt}>
                    <Ionicons
                      name="lock-closed-outline"
                      size={20}
                      color="#5E5E5E"
                    />
                    <Text style={styles.menuTxt}>Security</Text>
                  </View>
                  <View style={styles.arrowIcon}>
                    <MaterialCommunityIcons
                      name="greater-than"
                      size={15}
                      color="#5E5E5E"
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.notificationBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("AccountSetting")}
                  style={styles.iconBox}
                >
                  <View style={styles.iconAndTxt}>
                    <MaterialCommunityIcons
                      name="account-circle-outline"
                      size={20}
                      color="#5E5E5E"
                    />
                    <Text style={styles.menuTxt}>Account</Text>
                  </View>
                  <View style={styles.arrowIcon}>
                    <MaterialCommunityIcons
                      name="greater-than"
                      size={15}
                      color="#5E5E5E"
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.notificationBox}>
                <TouchableOpacity style={styles.iconBox}>
                  <View style={styles.iconAndTxt}>
                    <AntDesign name="solution1" size={20} color="#5E5E5E" />
                    <Text style={styles.menuTxt}>About</Text>
                  </View>
                  <View style={styles.arrowIcon}>
                    <MaterialCommunityIcons
                      name="greater-than"
                      size={15}
                      color="#5E5E5E"
                    />
                  </View>
                </TouchableOpacity>
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
  },
  settingTxt: {
    fontFamily: "RubikSemiBold",
    fontSize: 20,
  },
  settingListBox: {
    marginTop: 30,
  },
  notificationBox: {
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },

  iconAndTxt: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {},
  menuTxt: {
    paddingLeft: 10,
    fontFamily: "RubikRegular",
    fontSize: 16,
    alignSelf: "center",
  },
});
