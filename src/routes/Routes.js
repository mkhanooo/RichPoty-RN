import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import LoginScreen from "../screens/Profile/LoginScreen/LoginScreen";
import NewTheme from "../components/theme";
import Setting from "../screens/Settings";
import EditProfile from "../screens/Profile/EditProfile";
import NotificationSetting from "../screens/Settings/NotificationSetting";
import AccountSetting from "../screens/Settings/AccountSetting";
import FollowScreen from "../screens/Profile/FollowUnfollow/FollowScreen";
import PostDetail from "../screens/MoreScreens/PostDetail";
import GalleryDetails from "../screens/Profile/UserPhotosScreens/GalleryDetails";

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer theme={NewTheme}>
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Setting"
          component={Setting}
        />
      
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="NotificationSetting"
          component={NotificationSetting}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AccountSetting"
          component={AccountSetting}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="FollowScreen"
          component={FollowScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="PostDetail"
          component={PostDetail}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="GalleryDetails"
          component={GalleryDetails}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
