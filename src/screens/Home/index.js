import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import Post from "../../components/Post";
import NewPost from "../../components/NewPost";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

export default function Home({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const { colors } = useTheme();
  const post = {};
  useEffect(() => {
    console.log("khan");
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.topMainBox}>
        <View style={styles.logoTxtBox}>
          <View style={styles.logoBox}>
            <Image
              style={{ width: 54, height: 50 }}
              source={require("../../assets/icons/rplogo.png")}
            />
          </View>
          <View style={styles.txtBox}>
            <Text
              style={{
                fontFamily: "LeckerliOne",
                fontSize: 24,
                lineHeight: 32.28,
              }}
            >
              RichPoty
            </Text>
          </View>
        </View>
        <View style={styles.topIconBox}>
          <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
            <MaterialIcons name="settings" size={24} color="black" />
          </TouchableOpacity>
          {/* <View style={styles.bellIconBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <MaterialCommunityIcons name="bell" size={24} color="#000" />
            </TouchableOpacity>
          </View> */}
          {/* <View style={styles.dotIconBox}>
            <TouchableOpacity>
              <Image
                style={{
                  height: 8,
                  width: 8,
                  position: "absolute",
                  right: 6,
                  top: 3,
                }}
                source={require("../../assets/icons/ellipse.png")}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>

      <ScrollView>
        <NewPost navigation={navigation} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flex: 1,
  },
  topMainBox: {
    backgroundColor: "#fff",

    flexDirection: "row",
  },
  logoTxtBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    flex: 1,
  },
  logoBox: {
    marginTop: 12,
    marginLeft: 20,
  },
  txtBox: {
    paddingLeft: 15,
    paddingTop: 18,
  },
  topIconBox: {
    flexDirection: "row",
    marginTop: 25,
    marginRight: 20,
  },
  //newenwnew

  postTopBox: {
    flexDirection: "row",
  },
  pictureNameBox: {
    flexDirection: "row",
    marginTop: 15,
  },
  pictureBox: {
    marginLeft: 10,
  },
  nameBox: {
    marginLeft: 10,
    marginTop: 8,
  },
  optionBox: {},
  postDesc: {},
  postDescTxt: {
    fontFamily: "RubikRegular",
    color: "#666768",
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  postWebsiteTxt: {
    fontFamily: "RubikRegular",
    color: "#84A3FF",
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
  postPictureBox: {
    marginTop: 5,
    alignSelf: "center",
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  postPicture: {
    flex: 1,
    // width: undefined,
    // height: undefined,
    resizeMode: "cover",
    // marginLeft: 10,
    // marginRight: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  lowerIconBox: {},
  likeButtonBox: {
    width: 100,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 20,
  },
  //--
  bellIconBox: {
    width: 30,
    height: 30,
    marginTop: -3,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#F90217",
    borderRadius: 20,
  },
});
