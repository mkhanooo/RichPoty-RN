import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import axios from "./../../../axios/index";
import { Ionicons } from "@expo/vector-icons";
import TopHeader from "../../components/TopHeader";
import NewPost from "../../components/NewPost";
import TabDetails from "./UserPhotosScreens/TabDetails";

export default function Profile({ navigation, source }) {
  const [active, setActive] = useState("Posts");
  const [currentUser, setCurrentUser] = useState({});

  const data = {
    profilePicture: "https://i.ibb.co/gWSky57/Oval.png",
    postNum: "56",
    followingNum: "4",
    followerNum: "14",
    likesNum: "1M",
    profileName: "Ariana Barros",
    userName: "ArianaBarros55",
    profileBio:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  };
  const buttonData = [
    {
      bname: "Posts",
      icon: "ios-grid-outline",
    },
    {
      bname: "Gallery",
      icon: "image-outline",
    },

    {
      bname: "Saved",
      icon: "bookmark-outline",
    },
  ];
  useEffect(() => {
    axios
      .get("/user")
      .then((user) => {
        console.log(user.data.data);
        setCurrentUser(user.data.data);
      })
      .catch((err) => {
        console.log("error found " + err);
      });
    console.log(currentUser);
  }, []);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ marginTop: 10, paddingBottom: 10 }}>
        <TopHeader navigation={navigation} />
      </View>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <View style={styles.profileTopBox}>
            <View style={styles.profileImageBox}>
              <Image
                style={styles.profileImg}
                source={{ uri: currentUser.userImage }}
              />
            </View>
            <View
              style={[styles.followerMainBox, { width: windowWidth - 115 }]}
            >
              <View style={styles.postNumBox}>
                <Text style={styles.followerTxt}>{data.postNum}</Text>
                <Text style={styles.followerTxt}>Posts</Text>
              </View>
              <View style={styles.verticalLine}></View>
              <View style={styles.followingNumBox}>
                <Text style={styles.followerTxt}>{data.followingNum}</Text>
                <Text style={styles.followerTxt}>Following</Text>
              </View>
              <View style={styles.verticalLine}></View>
              <View style={styles.followerNumBox}>
                <Text style={styles.followerTxt}>{data.followerNum}</Text>
                <Text style={styles.followerTxt}>Followers</Text>
              </View>
              <View style={styles.verticalLine}></View>
              <View style={styles.likesNumBox}>
                <Text style={styles.followerTxt}>{data.likesNum}</Text>
                <Text style={styles.followerTxt}>Likes</Text>
              </View>
            </View>
          </View>
          <View style={styles.profileNameButtomBox}>
            <View style={[styles.nameBioBox, { width: windowWidth / 1.8 }]}>
              <Text style={{ fontFamily: "RubikBold" }}>
                {currentUser.firstName} {currentUser.lastName}
              </Text>
              <Text style={{ fontFamily: "RubikRegular", paddingTop: 2 }}>
                @{currentUser.userName}
              </Text>
              <Text
                style={{
                  fontFamily: "RubikLight",
                  width: windowWidth / 1.2,
                  paddingTop: 5,
                  fontSize: 13,
                }}
              >
                {data.profileBio}
              </Text>
            </View>
            <View style={styles.editProfileButtonBox}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
                style={styles.editProfileButton}
              >
                <Text
                  style={{
                    fontFamily: "RubikRegular",
                    color: "#fff",
                    alignSelf: "center",
                    paddingTop: 11,
                  }}
                >
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lowerTabBox}>
            {buttonData.map((button, i) => {
              return (
                <View style={{ flexDirection: "row" }} key={i}>
                  <TouchableOpacity
                    onPress={() => setActive(button.bname)}
                    style={styles.photoIcon}
                  >
                    <Ionicons name={button.icon} size={23} color="#A3A3A3" />
                    <Text
                      style={{
                        fontFamily: "RubikRegular",
                        color: "#858585",
                        paddingTop: 3,
                        paddingRight: 10,
                        paddingLeft: 10,
                      }}
                    >
                      {button.bname}
                    </Text>
                  </TouchableOpacity>
                  {buttonData.length - 1 !== i && (
                    <View style={styles.lowerVerticalline}></View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.lowerMainBox}>
          {active === "Posts" && (
            <TabDetails navigation={navigation} name={"Posts"} />
          )}
          {active === "Gallery" && (
            <TabDetails navigation={navigation} name={"Gallery"} />
          )}
          {active === "Saved" && (
            <TabDetails navigation={navigation} name={"Saved"} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  bodyContainer: {
    marginTop: 10,
  },
  profileTopBox: {
    flexDirection: "row",
    marginLeft: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  profileImageBox: {
    backgroundColor: "white",
  },
  profileImg: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  followerMainBox: {
    height: 65,
    borderRadius: 10,
    backgroundColor: "#ECECEC",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 10,
    marginTop: 5,
  },
  verticalLine: {
    height: 50,
    width: 1,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    marginTop: 6,
  },
  followerTxt: {
    fontFamily: "RubikRegular",
    color: "#585858",
    textAlign: "center",
  },
  postNumBox: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  },
  followingNumBox: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  },
  followerNumBox: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  },
  likesNumBox: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  },

  profileNameButtomBox: {
    marginLeft: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  nameBioBox: {
    marginTop: 15,
  },
  editProfileButtonBox: {},
  editProfileButton: {
    height: 40,
    width: 120,
    backgroundColor: "#FF0909",
    borderRadius: 5,
  },
  lowerTabBox: {
    marginTop: 18,
    flexDirection: "row",
    alignSelf: "center",
  },
  lowerVerticalline: {
    height: 30,
    width: 1,

    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  photoIconBox: {
    justifyContent: "space-evenly",
  },
  photoIcon: {
    flexDirection: "row",
    marginLeft: 10,
  },
  videoIconBox: {
    justifyContent: "space-evenly",
  },
  videoIcon: {
    marginLeft: 10,
    flexDirection: "row",
  },
  savedIconBox: {
    justifyContent: "space-evenly",
  },
  savedIcon: {
    marginLeft: 10,
    flexDirection: "row",
  },
  lowerMainBox: {
    marginTop: 15,
    marginBottom: 50,
  },
});
{
  /* <View style={styles.photoIconBox}>
              <TouchableOpacity style={styles.photoIcon}>
                <Ionicons name="image-outline" size={23} color="#A3A3A3" />
                <Text
                  style={{
                    fontFamily: "RubikRegular",
                    color: "#858585",
                    paddingTop: 3,
                    paddingRight: 10,
                    paddingLeft: 10,
                  }}
                >
                  Photos
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lowerVerticalline}></View>
            <View style={styles.videoIconBox}>
              <TouchableOpacity style={styles.videoIcon}>
                <Ionicons name="videocam-outline" size={25} color="#A3A3A3" />
                <Text
                  style={{
                    fontFamily: "RubikRegular",
                    color: "#858585",
                    paddingTop: 5,
                    paddingRight: 10,
                    paddingLeft: 10,
                  }}
                >
                  Videos
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lowerVerticalline}></View>
            <View style={styles.savedIconBox}>
              <TouchableOpacity style={styles.savedIcon}>
                <FontAwesome name="bookmark-o" size={22} color="#9E9E9E" />
                <Text
                  style={{
                    fontFamily: "RubikRegular",
                    color: "#858585",
                    paddingTop: 3,
                    paddingLeft: 10,
                  }}
                >
                  Saved
                </Text>
              </TouchableOpacity>
            </View> */
}
