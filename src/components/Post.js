import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";


export default function Post() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const postData = [
    {
      profilePicture: "https://i.ibb.co/gWSky57/Oval.png",
      name: "Ariana Barros",
      timeStamp: "3 Hour Ago",
      postDesc:
        "My passion is to earn money with every second  last year i earn more than $500 Million in my E-Commerce Bussiness.  Do you want to earn money ? Contact us",
      website: "www.business.com",
      postPicture: "https://i.ibb.co/tpQtTTZ/1.png",
    },
  ];
  const [likeNum, setLikeNum] = useState(0);
  const [bookMark, setBookMark] = useState(true);
  const addLikeNum = () => {
    setLikeNum(likeNum + 1);
  };
  const removeLikeNum = () => {
    setLikeNum(likeNum - 1);
  };
  return (
    <View>
      {postData.map((post, i) => {
        return (
          <View style={styles.postMainBox} key={i}>
            <View style={styles.postTopBox}>
              <View style={styles.pictureNameBox}>
                <View style={styles.pictureBox}>
                  <Image
                    style={{ width: 46, height: 46, borderRadius: 100 }}
                    source={{ uri: post.profilePicture }}
                  />
                </View>
                <View style={styles.nameBox}>
                  <Text style={{ fontFamily: "RubikBold" }}>{post.name}</Text>
                  <Text
                    style={{
                      fontFamily: "RubikRegular",
                      fontSize: 10,
                      color: "#9E9E9E",
                    }}
                  >
                    {post.timeStamp}
                  </Text>
                </View>
              </View>
             
             
              <View
                style={{
                  position: "absolute",
                  right: 10,
                  marginTop: 23,
                  marginRight: 10,
                }}
              >
                <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={22} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.postDesc}>
              <Text style={styles.postDescTxt}>{post.postDesc}</Text>
              <TouchableOpacity>
                <Text style={styles.postWebsiteTxt}>{post.website}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.postPictureBox,
                { width: windowWidth * 0.95, height: windowHeight * 0.22 },
              ]}
            >
              <Image
                style={[styles.postPicture, {}]}
                source={{ uri: post.postPicture }}
              />
            </View>
            <View style={styles.lowerIconBox}>
              <View style={styles.likeButtonBox}>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    left: 34,
                    top: -10,
                  }}
                >
                  <View
                    style={{
                      height: 17,
                      width: 40,
                      backgroundColor: "#fff",
                      position: "absolute",
                      right: -5.5,
                    }}
                  ></View>
                  <AntDesign name="heart" size={27} color="red"></AntDesign>
                </TouchableOpacity>
                <Text style={{ position: "absolute", left: 36, top: 16 }}>
                  123
                </Text>
              </View>
              <View style={styles.commentButtonBox}>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    left: 34,
                    top: -10,
                  }}
                >
                  <View
                    style={{
                      height: 17,
                      width: 40,
                      backgroundColor: "#fff",
                      position: "absolute",
                      right: -5.5,
                    }}
                  ></View>
                  <FontAwesome
                    style={{ marginTop: -3 }}
                    name="commenting-o"
                    size={27}
                    color="grey"
                  />
                </TouchableOpacity>
                <Text style={{ position: "absolute", left: 36, top: 16 }}>
                  123
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={{ marginTop: 28, marginLeft: 50 }}
                  onPress={() => setBookMark((prevBookMark) => !prevBookMark)}
                >
                  {bookMark ? (
                    <FontAwesome name="bookmark-o" size={25} color="#9E9E9E" />
                  ) : (
                    <FontAwesome name="bookmark" size={25} color="#9E9E9E" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  postMainBox: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingBottom: 15,
    backgroundColor: "#fff",
  },
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
  lowerIconBox: {
    flexDirection: "row",
  },
  likeButtonBox: {
    width: 100,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 20,
  },
  commentButtonBox: {
    width: 100,
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
  },
});
//-------------------------------------
{
  /* <View style={styles.lowerIconBox}>
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => {
                  addLikeNum();
                }}
              >
                {likeNum == 0 ? (
                  <FontAwesome5 name="heart" size={25} color="#9E9E9E" />
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      removeLikeNum();
                    }}
                  >
                    <AntDesign name="heart" size={25} color="red" />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
              <Text style={styles.iconTxt}>{likeNum}</Text>
              <TouchableOpacity style={{ marginLeft: 15 }}>
                <FontAwesome5 name="comment-dots" size={25} color="#9E9E9E" />
              </TouchableOpacity>
              <Text style={styles.iconTxt}>2</Text>
              <TouchableOpacity style={{ marginLeft: 15 }}>
                <AntDesign name="sharealt" size={25} color="#9E9E9E" />
              </TouchableOpacity>
              <Text style={styles.iconTxt}>2</Text>
              <TouchableOpacity
                style={{ position: "absolute", right: 30 }}
                onPress={() => setBookMark((prevBookMark) => !prevBookMark)}
              >
                {bookMark ? (
                  <FontAwesome name="bookmark-o" size={25} color="#9E9E9E" />
                ) : (
                  <FontAwesome name="bookmark" size={25} color="#9E9E9E" />
                )}
              </TouchableOpacity>
            </View> */
  // lowerIconBox: {
  //   marginTop: 15,
  //   flexDirection: "row",
  // },
  // iconTxt: {
  //   fontFamily: "RubikRegular",
  //   fontSize: 15,
  //   paddingTop: 5,
  //   paddingLeft: 10,
  //   color: "#9E9E9E",
  // },
}
