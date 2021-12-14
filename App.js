import React from "react";
import Routes from "./src/routes/Routes";
import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  View,
  Platform,
  useWindowDimensions,
  Text,
} from "react-native";
export default function App({}) {
  const windowWidth = useWindowDimensions().width;
  let [fontLoaded] = useFonts({
    RubikRegular: require("./fonts/Rubik-Regular.ttf"),
    RubikBold: require("./fonts/Rubik-Bold.ttf"),
    RubikSemiBold: require("./fonts/Rubik-SemiBold.ttf"),
    RubikLight: require("./fonts/Rubik-Light.ttf"),
    RubikMedium: require("./fonts/Rubik-Medium.ttf"),
    LeckerliOne: require("./fonts/LeckerliOne-Regular.ttf"),
  });
  if (!fontLoaded) {
    return <ActivityIndicator />;
  }
  return (
    // <View
    //   style={{
    //     maxWidth: Platform.OS === "web" ? 600 : "auto",
    //     height: "100%",
    //     alignContent: "center",
    //     marginLeft: Platform.OS === "web" ? windowWidth / 4 : 0,
    //   }}
    // >
    <>
      <Routes  />
      </>
    // </View>
  );
}
