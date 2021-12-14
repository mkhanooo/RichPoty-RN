import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
export default function Notification({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const notificationData = [
    {
      name: "Henna Baker",
      picture: "https://i.ibb.co/hZrfBWQ/Rectangle-3-2.png",
      notification: "Liked your post ``End of 2021`` ",
      timeStamp: "3 Hour Ago",
      line: "true",
    },
  ];
  const readNotification = [
    {
      name: "Henna Baker",
      picture: "https://i.ibb.co/wJTNcW0/Rectangle-3.png",
      notification: "Followed you ",
      followBack: "Follow Back",
      timeStamp: "7 Hour Ago",
      line: "true",
    },
    {
      name: "Cristina Bross",
      picture: "https://i.ibb.co/hZrfBWQ/Rectangle-3-2.png",
      notification: "Liked your  post ``End of 2022`` ",
      timeStamp: "4 Hour Ago",
      line: "true",
    },
    {
      name: "Henna Baker",
      picture: "https://i.ibb.co/hZrfBWQ/Rectangle-3-2.png",
      notification: "Liked your post ``End of 2021`` ",
      timeStamp: "7 Hour Ago",
      line: "true",
    },
    {
      name: "Cristina Bross",
      picture: "https://i.ibb.co/wJTNcW0/Rectangle-3.png",
      notification: "Liked your  post ``End of 2022`` ",
      timeStamp: "4 Hour Ago",
    },
  ];
  const [follow, setFollow] = useState();
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.topIconsBox}>
          <View style={styles.notificationTxtBox}>
            <Text style={styles.notificationTxt}>Notifications</Text>
          </View>
          <View style={styles.settingIconBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate("NotificationSetting")}
            >
              <MaterialIcons name="settings" size={25} color="black" />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.bellIconBox}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="bell" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.dotIconBox}>
            <TouchableOpacity>
              <Image
                style={{
                  height: 8,
                  width: 8,
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}
                source={require("../../assets/icons/ellipse.png")}
              />
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={styles.unreadTxtBox}>
          <Text style={styles.unreadTxt}>Unread</Text>
        </View>
        <View style={styles.unreadNoitfication}>
          {notificationData.map((notification, i) => {
            return (
              <View style={styles.unreadMainBox} key={i}>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <View style={styles.unreadPictureBox}>
                    <TouchableWithoutFeedback
                      onPress={() => navigation.navigate("FollowScreen" ,{name:"khan" , uname:"@mkhanooo" })}
                    >
                      <Image
                        style={styles.unreadPicture}
                        source={{ uri: notification.picture }}
                      />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.notificationDataBox}>
                    <Text
                      ellipsizeMode="middle"
                      style={{ fontFamily: "RubikBold", fontSize: 15 }}
                    >
                      {notification.name}
                    </Text>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={2}
                      style={{
                        width: windowWidth - 130,
                        fontFamily: "RubikSemiBold",
                        fontSize: 14,
                        color: "#686868",
                        paddingTop: 5,
                      }}
                    >
                      {notification.notification}
                    </Text>
                  </View>
                  <View style={{ position: "absolute", right: 35, top: 20 }}>
                    <Text
                      style={{
                        fontFamily: "RubikLight",
                        fontSize: 12,
                      }}
                    >
                      {notification.timeStamp}
                    </Text>
                  </View>
                </View>
                {notification.line && (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      maxWidth: windowWidth / 1.12,
                      marginLeft: 20,
                      marginTop: 10,
                      borderColor: "#D7D7D7",
                    }}
                  ></View>
                )}
              </View>
            );
          })}
        </View>
        <View style={styles.previousTxtBox}>
          <Text
            style={{
              fontFamily: "RubikSemiBold",
              color: "#5B5B5B",
              fontSize: 15,
            }}
          >
            Previous
          </Text>
        </View>
        <View>
          {readNotification.map((notification, i) => {
            return (
              <View style={styles.unreadMainBox} key={i}>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <View style={styles.unreadPictureBox}>
                    <Image
                      style={styles.unreadPicture}
                      source={{ uri: notification.picture }}
                    />
                  </View>
                  <View style={styles.notificationDataBox}>
                    <Text style={{ fontFamily: "RubikBold", fontSize: 15 }}>
                      {notification.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "RubikSemiBold",
                        fontSize: 14,
                        color: "#686868",
                        paddingTop: 5,
                      }}
                    >
                      {notification.notification}
                    </Text>
                  </View>
                  <View style={{ position: "absolute", right: 35, top: 20 }}>
                    <Text
                      style={{
                        fontFamily: "RubikLight",
                        fontSize: 12,
                      }}
                    >
                      {notification.timeStamp}
                    </Text>
                  </View>
                  {notification.followBack && (
                    <TouchableOpacity
                      onPress={() => setFollow((prevState) => !prevState)}
                      style={styles.followBackBox}
                    >
                      <Text
                        style={{
                          fontFamily: "RubikSemiBold",
                          color: "#fff",
                          fontSize: 13,
                          textAlign: "center",
                          paddingTop: 8,
                        }}
                      >
                        {follow ? notification.followBack : "Followed"}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
                {notification.line && (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      maxWidth: windowWidth / 1.12,
                      marginLeft: 20,
                      marginTop: 10,
                      borderColor: "#D7D7D7",
                    }}
                  ></View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
  },
  topIconsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },
  settingIconBox: {
    // marginTop: 10,
    marginRight: 10,
  },
  bellIconBox: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F90217",
    borderRadius: 20,
  },
  dotIconBox: {},
  notificationTxtBox: {
    marginLeft: 15,
  },
  notificationTxt: {
    fontFamily: "RubikSemiBold",
    fontSize: 24,
  },
  unreadTxtBox: {
    marginTop: 10,
    marginLeft: 15,
  },
  unreadTxt: {
    fontFamily: "RubikSemiBold",
    fontSize: 15,
    color: "#5B5B5B",
    paddingTop: 10,
  },
  unreadNoitfication: {
    marginTop: 10,
    backgroundColor: "#FFF0F0",
  },
  unreadMainBox: {},
  unreadPictureBox: {},
  unreadPicture: {
    height: 64,
    width: 64,
    borderRadius: 32,
    marginLeft: 15,
    marginTop: 15,
  },
  notificationDataBox: {
    paddingLeft: 15,
    paddingTop: 22,
  },
  previousTxtBox: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  followBackBox: {
    width: 100,
    height: 30,
    backgroundColor: "red",
    borderRadius: 20,
    position: "absolute",
    right: 30,
    top: 40,
  },
});
