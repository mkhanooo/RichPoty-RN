import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  Feather,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import NewPost from "../../components/NewPost";

export default function PostDetail({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const initialState = [
    {
      profilePicture: "https://i.ibb.co/gWSky57/Oval.png",
      name: "Ariana Barros",
      timeStamp: "3 Hour Ago",
      postDesc:
        "My passion is to earn money with every second  last year i earn more than $500 Million in my E-Commerce Bussiness.  Do you want to earn money ? Contact us",
      website: "www.business.com",
      postPicture: "https://i.ibb.co/bXNHbtY/pexels-alex-fu-4011182.jpg",
    },
  ];
  const commentData = [
    {
      username: "tadeubonini",
      picture: "https://i.ibb.co/gWSky57/Oval.png",
      author: "true",
      timeStamp: "1 day ago",
      comment: "Hey! Check out this",
      likeNum: "3",
    },
    {
      username: "pedrogadelha",
      picture: "https://i.ibb.co/hZrfBWQ/Rectangle-3-2.png",

      timeStamp: "3 day ago",
      comment:
        "No wonder they say that you need to be able to leave in time. The clearest examples of this are Lam and Alonso",
      likeNum: "3",
    },
    {
      username: "annaclaramm",
      picture: "https://i.ibb.co/7vLGHvq/Rectangle-3-1.png",

      timeStamp: "7 day ago",
      comment:
        "Flipping the cassette while reading/examining the fold-out cover 😁",
      likeNum: "3",
    },
    {
      username: "tadeubonini",
      picture: "https://i.ibb.co/wJTNcW0/Rectangle-3.png",

      timeStamp: "5 day ago",
      comment: "This is how Neo sees the world",
      likeNum: "3",
    },
  ];
  const [posts, setPosts] = useState(initialState);
  const [likeNum, setLikeNum] = useState(0);
  const [commentLikeNum, setCommentLikeNum] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [bookMark, setBookMark] = useState(true);
  const addLikeNum = () => {
    setLikeNum(likeNum + 1);
  };
  const removeLikeNum = () => {
    setLikeNum(likeNum - 1);
  };
  const addCommentLikeNum = () => {
    setCommentLikeNum(commentLikeNum + 1);
  };
  const removeCommentLikeNum = () => {
    setCommentLikeNum(commentLikeNum - 1);
  };

  return (
    <ScrollView style={{ height: windowHeight }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.postMainBox}>
        {posts.map((post, i) => {
          return (
            <View style={styles.postBox} key={i}>
              <View style={styles.pictureNameBox}>
                <View style={styles.pictureBox}>
                  <Image
                    style={{ width: 46, height: 46, borderRadius: 100 }}
                    source={{ uri: post.profilePicture }}
                  />
                </View>
                <View style={styles.nameBox}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("FollowScreen")}
                  >
                    <Text style={{ fontFamily: "RubikBold" }}>{post.name}</Text>
                  </TouchableWithoutFeedback>
                  <Text style={styles.timeStampTxt}>{post.timeStamp}</Text>
                </View>
                {/* modal start here */}
                <View style={styles.modalTopBox}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    style={styles.modal}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <TouchableWithoutFeedback
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <View style={styles.modalOverlay} />
                    </TouchableWithoutFeedback>
                    <View
                      style={[
                        styles.modalmainbox,
                        {
                          backgroundColor: "white",
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                      ]}
                    >
                      <View style={styles.editModalBox}>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}
                          style={styles.deletebutton}
                        >
                          <Feather name="edit" size={23} color="#677294" />
                          <Text style={styles.editTxt}>Edit</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}
                          style={styles.deletebutton}
                        >
                          <AntDesign name="delete" size={23} color="#677294" />
                          <Text style={styles.deleteTxt}>Delete</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}
                          style={styles.deletebutton}
                        >
                          <Ionicons
                            name="share-social-outline"
                            size={23}
                            color="#677294"
                          />
                          <Text style={styles.shareTxt}>Share</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                  {/*  */}
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Entypo
                      name="dots-three-horizontal"
                      size={22}
                      color="grey"
                    />
                  </TouchableOpacity>
                </View>
                {/* modal end here */}
              </View>
              <View style={styles.postDesc}>
                <Text style={styles.postDescTxt}>{post.postDesc}</Text>
                <TouchableOpacity>
                  <Text style={styles.postWebsiteTxt}>{post.website}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.postPictureBox]}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("PostDetail")}
                >
                  <Image
                    style={[styles.postPicture]}
                    source={{ uri: post.postPicture }}
                  />
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.lowerIconBox}>
                <View>
                  <TouchableOpacity
                    onPress={() => setBookMark((prevBookMark) => !prevBookMark)}
                  >
                    {bookMark ? (
                      <FontAwesome
                        name="bookmark-o"
                        size={25}
                        color="#9E9E9E"
                      />
                    ) : (
                      <FontAwesome name="bookmark" size={25} color="#9E9E9E" />
                    )}
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.commentIconBox}>
                    <Ionicons
                      name="chatbubble-outline"
                      size={25}
                      color="#9E9E9E"
                    />
                    <Text style={styles.commentNumTxt}>
                      {commentData.length}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.likeButtonBox}>
                  <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                    onPress={() => {
                      addLikeNum();
                    }}
                  >
                    {likeNum == 0 ? (
                      <AntDesign name="hearto" size={25} color="#9E9E9E" />
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
                  <Text
                    style={{
                      fontFamily: "RubikLight",
                      fontSize: 13,
                      paddingTop: 6,
                      marginLeft: 10,
                    }}
                  >
                    {likeNum}
                  </Text>
                </View>
              </View>
              <View style={styles.commentsStylesMainBox}>
                {commentData.map((comment, k) => {
                  return (
                    <View key={k}>
                      <View style={styles.userDetailBox}>
                        <Image
                          style={styles.commentUserImg}
                          source={{ uri: comment.picture }}
                        />
                        <Text style={{ paddingLeft: 8 }}>
                          @{comment.username}
                        </Text>
                        {comment.author && (
                          <Text style={{ paddingLeft: 8, color: "#FF0000" }}>
                            <AntDesign
                              name="checkcircle"
                              size={15}
                              color="#FF0000"
                            />
                            Author
                          </Text>
                        )}
                        <Text style={{ paddingLeft: 8, color: "#A2A2A2" }}>
                          {comment.timeStamp}
                        </Text>
                      </View>
                      <View style={styles.commentTxtBox}>
                        <Text style={styles.commentTxt}>{comment.comment}</Text>
                      </View>
                      <View style={styles.lowercommentIconBox}>
                        <TouchableOpacity
                          style={styles.lowerCommentBox}
                          onPress={() => {
                            addCommentLikeNum();
                          }}
                        >
                          {commentLikeNum == 0 ? (
                            <AntDesign
                              name="hearto"
                              size={20}
                              color="#9E9E9E"
                            />
                          ) : (
                            <TouchableOpacity
                              onPress={() => {
                                removeCommentLikeNum();
                              }}
                            >
                              <AntDesign name="heart" size={20} color="red" />
                            </TouchableOpacity>
                          )}
                        </TouchableOpacity>
                        <Text style={styles.commentLikeNumTxt}>
                          {commentLikeNum}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
              <View style={styles.lowerCommentInputBox}>
                <Image
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    paddingTop: 10,
                  }}
                  source={{ uri: "https://i.ibb.co/gWSky57/Oval.png" }}
                />
                <TextInput
                  style={[
                    styles.commentInput,
                    {
                      minWidth: windowWidth - 85,
                      maxWidth: windowWidth - 85,
                    },
                  ]}
                  placeholder="Add a Comment"
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                  multiline={true}
                  right={<TextInput.Icon name="send" color="red" size={25} />}
                />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  postMainBox: {},
  postBox: {},
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
  timeStampTxt: {
    fontFamily: "RubikRegular",
    fontSize: 10,
    color: "#9E9E9E",
  },
  //---modal style
  modalTopBox: {
    position: "absolute",
    right: 10,
    marginTop: 8,
    marginRight: 10,
  },
  modal: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    overflow: "hidden",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalmainbox: {
    height: "auto",
    marginTop: "auto",
  },
  editModalBox: {
    marginTop: 10,
  },
  editTxt: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 8,
    color: "#677294",
    fontFamily: "RubikRegular",
  },
  commentModalMainBox: {
    marginTop: "auto",
  },
  deletebutton: {
    marginLeft: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
  deleteTxt: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 8,
    color: "#677294",
    fontFamily: "RubikRegular",
  },
  shareTxt: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 8,
    color: "#677294",
    fontFamily: "RubikRegular",
  },
  //---- modal style end
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
    flex: 1,
    width: "100%",
    minHeight: 250,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    alignSelf: "center",
  },
  postPicture: {
    width: "100%",
    minHeight: 250,
    resizeMode: "contain",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  lowerIconBox: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  commentIconBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentNumTxt: {
    fontFamily: "RubikLight",
    fontSize: 13,
    marginTop: 2,
    marginLeft: 10,
  },
  likeButtonBox: {
    flexDirection: "row",
  },
  // Comment styles
  commentsStylesMainBox: {
    marginLeft: 10,
    marginRight: 10,
  },
  userDetailBox: {
    marginTop: 15,
    marginLeft: 10,
    flexDirection: "row",
  },
  commentUserImg: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  commentTxtBox: {
    marginLeft: 50,
  },
  commentTxt: {
    fontFamily: "RubikLight",
    fontSize: 16,
    paddingRight: 15,
  },
  lowercommentIconBox: {
    flexDirection: "row",
    marginLeft: 50,
    marginTop: 5,
  },
  lowerCommentBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentLikeNumTxt: {
    fontFamily: "RubikLight",
    fontSize: 13,
    paddingTop: 6,
    marginLeft: 10,
  },
  lowerCommentInputBox: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
  },
});
