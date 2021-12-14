import React, { useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  Platform,
} from "react-native";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginButton from "../../../components/LoginButton";
import axios from "axios";

export default function LoginScreen({navigation}) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const { colors } = useTheme();

  // googleSignIn

  const handleGoogleSignin = () => {
    const config = {
      iosClientId: `756104875039-8n4p1baj2ovl8nq4jdurb6mjthu4spu6.apps.googleusercontent.com`,
      androidClientId: `756104875039-7mnobn150l2hqudj8a4pebbcmg8c36ns.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    };
    // Google auth
    Google.logInAsync(config)
      .then((result) => {
        if (result.type !== "cancel") {
          axios
            .post(
              // "http://192.168.18.22:3001/api/private/login",
              "https://richpoty.bixosoft.com/api/private/login",
              result
            )
            .then((res) => {
              if (res.data) {
                AsyncStorage.setItem("token", res.data.data.token);
                console.log("res.data===", res.data);
                alert("Logged In", "You just logged in!!!");
                navigation.navigate("Profile");
              }
              else{
                console.log(res)
              }
            }),
            (err) => console.log("err===", err);
          console.log(result);
        } else {
          alert("Request Cancelled", "You just cencelled login request!!!");
        }
      })
      .catch((err) => {
        console.log("catch", err);
      });
  };

  // facebook  signin

  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: "336489451145584",
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  return (
    <View style={{ minHeight: 875 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("../../../assets/logo-screeen-background.png")}
        resizeMode="cover"
        style={{ minHeight: windowHeight }}
      >
        <View style={styles.iconImageBox}>
          <Image
            style={styles.iconImage}
            source={require("../../../assets/loginscreenicon.png")}
          />
          <Text style={styles.topTxt}>Join us to start browsing</Text>
          <Text style={styles.descTxt}>
            You can find the best-posted content with ranking from different
            forums and social media platforms. To maintain their post logs and
            post ideas in one place.
          </Text>
          <View style={{ marginTop: 52 }}>
            <LoginButton
              title={"Facebook"}
              path={"https://i.ibb.co/1d8D8GT/facebook-Icon.png"}
              handleGoogleSignin={logIn}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <LoginButton
              title={"Google    "}
              path={"https://i.ibb.co/SVB3GBz/google-Icon.png"}
              handleGoogleSignin={handleGoogleSignin}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  iconImageBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  iconImage: {
    width: 120,
    height: 120,
  },
  topTxt: {
    fontFamily: "RubikSemiBold",
    fontSize: 22,
    marginTop: 27,
  },
  descTxt: {
    textAlign: "center",
    alignContent: "center",
    paddingLeft: 23,
    paddingRight: 23,
    paddingTop: 10,
    lineHeight: 18.22,
    fontSize: 15,
    justifyContent: "center",
    fontFamily: "RubikRegular",
    color: "#677294",
  },
});
