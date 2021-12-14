import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import TopHeader from "../../../components/TopHeader";
import NewPost from "../../../components/NewPost";

export default function FollowScreen({ navigation}) {
 
  const data = {
    profilePicture: "https://i.ibb.co/gWSky57/Oval.png",
    postNum: "56",
    followingNum: "4",
    followerNum: "14",
    likesNum: "1M",
    profileName: "Waseem Akram",
    userName: "WaseemAkram55",
    profileBio:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  };
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [follow, setFollow] = useState();
  // useEffect(() => {
  //   console.log(navigation.getParam());
  // }, []);
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 10, paddingBottom: 10 }}>
        <TopHeader />
      </View>
      {follow ? (
        <ScrollView>
          <View style={styles.bodyContainer}>
            <View style={styles.profileTopBox}>
              <View style={styles.profileImageBox}>
                <Image
                  style={styles.profileImg}
                  source={{ uri: data.profilePicture }}
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
                  {data.profileName}
                  
                </Text>
                <Text style={{ fontFamily: "RubikRegular", paddingTop: 2 }}>
                  @{data.userName}
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
                  onPress={() => setFollow((prevState) => !prevState)}
                  style={styles.followBackBox}
                >
                  <Text
                    style={{
                      fontFamily: "RubikSemiBold",
                      color: "#fff",
                      fontSize: 13,
                      textAlign: "center",
                    }}
                  >
                    {follow ? "Unfollow" : "Follow"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.messageButtonBox}>
              <TouchableOpacity style={styles.messageButton}>
                <Text
                  style={{
                    fontFamily: "RubikSemiBold",
                    color: "#fff",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Send Message
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lowerMainBox}>
              <NewPost />
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View style={styles.bodyContainer}>
            <View style={styles.profileTopBox}>
              <View style={styles.profileImageBox}>
                <Image
                  style={styles.profileImg}
                  source={{ uri: data.profilePicture }}
                />
              </View>
              <View
                style={[styles.followerMainBox, { width: windowWidth - 115 }]}
              >
                <View style={styles.postNumBox}>
                  <Text style={styles.followerTxt}>Posts</Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.followingNumBox}>
                  <Text style={styles.followerTxt}>Following</Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.followerNumBox}>
                  <Text style={styles.followerTxt}>Followers</Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.likesNumBox}>
                  <Text style={styles.followerTxt}>Likes</Text>
                </View>
              </View>
            </View>
            <View style={styles.profileNameButtomBox}>
              <View style={[styles.nameBioBox, { width: windowWidth / 1.8 }]}>
                <Text style={{ fontFamily: "RubikBold" }}>
                  {data.profileName}
                  
                </Text>
                <Text style={{ fontFamily: "RubikRegular", paddingTop: 2 }}>
                  @{data.userName}
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
            </View>
            <View style={styles.line}></View>
            <View style={styles.messageButtonBox}>
              <TouchableOpacity
                onPress={() => setFollow((prevState) => !prevState)}
                style={styles.messageButton}
              >
                <Text
                  style={{
                    fontFamily: "RubikSemiBold",
                    color: "#fff",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  {follow ? "Unfollow" : "Follow"}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.lowerLockBox,
                { marginBottom: windowHeight / 2.7 },
              ]}
            >
              <View style={styles.contentTxtBox}>
                <Text style={styles.contentTxt}>
                  Follow {data.profileName} to show content.
                </Text>
                <Ionicons
                  name="md-lock-closed-outline"
                  size={70}
                  color="#00000012"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
  editProfileButtonBox: {
    position: "absolute",
    right: 30,
  },
  followBackBox: {
    width: 100,
    height: 40,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
  },

  lowerMainBox: {
    marginTop: 15,
    marginBottom: 50,
  },
  line: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  messageButtonBox: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
  messageButton: {
    height: 40,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
  },
  lowerLockBox: {
    justifyContent: "center",
    marginTop: 110,
  },
  contentTxtBox: {
    alignItems: "center",
  },
  contentTxt: {
    color: "lightgrey",
    fontSize: 20,
    textAlign: "center",
    maxWidth: 250,
    fontFamily: "RubikRegular",
  },
});
