import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Keyboard } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//Main Tabs
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Notification from "../screens/Notification";
import Search from "../screens/Search";
import AddPost from "../screens/AddPost";
import TopHeader from "../components/TopHeader";

const Tab = createBottomTabNavigator();
export default function BottomTabs({ navigation }) {
  const [isKeyboard, setIsKeyboard] = useState(false);
  Keyboard.addListener("keyboardDidShow", () => setIsKeyboard(true));
  Keyboard.addListener("keyboardDidHide", () => setIsKeyboard(false));

  return (
    <Tab.Navigator
      initialRouteName={"Profile"}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 74,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Notification") {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "md-person-sharp" : "md-person-outline";
          }

          // // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={"grey"} />;
        },
        tabBarActiveTintColor: "#A3A2A2",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />

      <Tab.Screen
        name="AddPost"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconBox, { backgroundColor: "#fff" }]}>
              <View
                style={{
                  height: 72,
                  width: 72,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "red",
                  borderRadius: 100,
                  top: isKeyboard ? 0 : -35,
                  alignSelf: "center",
                  borderColor: "rgb(242,242,242)",
                  borderWidth: 6,
                }}
              >
                <Image
                  source={require("../assets/icons/add.png")}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 19.89,
                    tintColor: "#fff",
                  }}
                />
              </View>
            </View>
          ),
        }}
        component={AddPost}
      />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen  name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
  },
});

//-----------------------------------------------------
// import React from "react";
// import { View, Text, Image, StyleSheet } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useTheme } from "@react-navigation/native";
// //Main Tabs
// import Home from "../screens/Home";
// import Profile from "../screens/Profile";
// import Comments from "../screens/Comments";
// import Search from "../screens/Search";
// import AddPost from "../screens/AddPost";

// const Tab = createBottomTabNavigator();
// export default function BottomTabs({ navigation }) {
//   const { colors } = useTheme();
//   return (
//     <Tab.Navigator
//       initialRouteName={"Home"}
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: "#fff",
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           height: 74,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={[
//                 styles.iconBox,
//                 {
//                   borderRadius: 20,
//                   backgroundColor: focused ? colors.primary : colors.card  ,
//                 },
//               ]}
//             >
//               <View>
//                 <Image
//                   source={require("../assets/icons/home.png")}
//                   resizeMode="contain"
//                   style={{
//                     width: 20,
//                     height: 19.89,
//                     tintColor: focused ? colors.card : colors.notification,
//                   }}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//         component={Home}
//       />
//       <Tab.Screen
//         name="Search"
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={[
//                 styles.iconBox,
//                 {
//                   borderRadius: 35,
//                   backgroundColor: focused ? colors.primary : colors.card ,
//                 },
//               ]}
//             >
//               <View>
//                 <Image
//                   source={require("../assets/icons/search.png")}
//                   resizeMode="contain"
//                   style={{
//                     width: 20,
//                     height: 19.89,
//                     tintColor: focused ? colors.card : colors.notification,
//                   }}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//         component={Search}
//       />

//       <Tab.Screen
//         name="AddPost"
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View style={[styles.iconBox, { backgroundColor: "#fff" }]}>
//               <View
//                 style={{
//                   height: 72,
//                   width: 72,
//                   alignItems: "center",
//                   justifyContent: "center",
//                   backgroundColor: "red",
//                   borderRadius: 100,
//                   top: -35,
//                   alignSelf: "center",
//                   borderColor: "rgb(242,242,242)",
//                   borderWidth: 6,
//                 }}
//               >
//                 <Image
//                   source={require("../assets/icons/add.png")}
//                   resizeMode="contain"
//                   style={{
//                     width: 20,
//                     height: 19.89,
//                     tintColor: "#fff",
//                   }}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//         component={AddPost}
//       />
//       <Tab.Screen
//         name="Comments"
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={[
//                 styles.iconBox,
//                 {
//                   borderRadius: 35,
//                   backgroundColor: focused ?colors.primary : colors.card ,
//                 },
//               ]}
//             >
//               <View>
//                 <Image
//                   source={require("../assets/icons/comments.png")}
//                   resizeMode="contain"
//                   style={{
//                     width: 20,
//                     height: 19.89,
//                     tintColor: focused ? colors.card : colors.notification,
//                   }}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//         component={Comments}
//       />
//       <Tab.Screen
//         name="Profile"
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={[
//                 styles.iconBox,
//                 {
//                   borderRadius: 35,
//                   backgroundColor: focused ?colors.primary : colors.card ,
//                 },
//               ]}
//             >
//               <View>
//                 <Image
//                   source={require("../assets/icons/profile.png")}
//                   resizeMode="contain"
//                   style={{
//                     width: 20,
//                     height: 19.89,
//                     tintColor: focused ? colors.card : colors.notification,
//                   }}
//                 />
//               </View>
//             </View>
//           ),
//         }}
//         component={Profile}
//       />
//     </Tab.Navigator>
//   );
// }
// const styles = StyleSheet.create({
//   iconBox: {
//     width: 40,
//     height: 40,
//     backgroundColor: "#FF0000",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
