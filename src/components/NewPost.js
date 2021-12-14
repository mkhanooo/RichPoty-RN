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
} from "react-native";
import {
  Entypo,
  FontAwesome,
  Feather,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

export default function NewPost({ navigation }) {
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
    {
      profilePicture: "https://i.ibb.co/hZrfBWQ/Rectangle-3-2.png",
      name: "Waseem Akram",
      timeStamp: "5 Hour Ago",
      postDesc:
        "Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      postPicture: "https://i.ibb.co/xG5vh62/pexels-cottonbro-6896322.jpg",
    },
    {
      profilePicture: "https://i.ibb.co/7vLGHvq/Rectangle-3-1.png",
      name: "Ariana Barros",
      timeStamp: "3 Days Ago",
      postDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
      postPicture: "https://i.ibb.co/LQBjKV9/pexels-ekaterina-nt-9027062.jpg",
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
    <View style={{ marginBottom: 20 }}>
      {posts.map((post, i) => {
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
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("FollowScreen")}
                  >
                    <Text style={{ fontFamily: "RubikBold" }}>{post.name}</Text>
                  </TouchableWithoutFeedback>
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
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  style={{
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    overflow: "hidden",
                  }}
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
                    <View style={{ marginTop: 10 }}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={styles.deletebutton}
                      >
                        <Feather name="edit" size={23} color="#677294" />
                        <Text
                          style={{
                            paddingTop: 5,
                            paddingLeft: 10,
                            paddingBottom: 8,
                            color: "#677294",
                            fontFamily: "RubikRegular",
                          }}
                        >
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={styles.deletebutton}
                      >
                        <AntDesign name="delete" size={23} color="#677294" />
                        <Text
                          style={{
                            paddingTop: 5,
                            paddingLeft: 10,
                            paddingBottom: 8,
                            color: "#677294",
                            fontFamily: "RubikRegular",
                          }}
                        >
                          Delete
                        </Text>
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
                        <Text
                          style={{
                            paddingTop: 5,
                            paddingLeft: 10,
                            paddingBottom: 8,
                            color: "#677294",
                            fontFamily: "RubikRegular",
                          }}
                        >
                          Share
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
                {/*  */}
                <TouchableOpacity onPress={() => setModalVisible(false)}>
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
                // { width: windowWidth /0.5, height: windowHeight / 3.5},
              ]}
            >
              <TouchableWithoutFeedback onPress={() => navigation.navigate("PostDetail")}>
                <Image
                  style={[
                    styles.postPicture,
                    // { width: windowWidth/0.5, height: windowHeight / 3.5 },
                  ]}
                  source={{ uri: post.postPicture }}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.lowerIconBox}>
              <View style={{}}>
                <TouchableOpacity
                  onPress={() => setBookMark((prevBookMark) => !prevBookMark)}
                >
                  {bookMark ? (
                    <FontAwesome name="bookmark-o" size={25} color="#9E9E9E" />
                  ) : (
                    <FontAwesome name="bookmark" size={25} color="#9E9E9E" />
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.commentButtonBox}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={commentModalVisible}
                  style={{
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    overflow: "hidden",
                  }}
                  onRequestClose={() => {
                    setCommentModalVisible(!commentModalVisible);
                  }}
                >
                  <TouchableWithoutFeedback
                    onPress={() => setCommentModalVisible(!commentModalVisible)}
                  >
                    <View style={styles.modalOverlay} />
                  </TouchableWithoutFeedback>
                  <View
                    style={[
                      styles.commentModalMainBox,
                      {
                        height: windowHeight / 2,
                        backgroundColor: "white",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                    ]}
                  >
                    <View style={styles.commentTopBox}>
                      <Text
                        style={{
                          fontFamily: "RubikSemiBold",
                          paddingLeft: 20,
                          paddingTop: 20,
                        }}
                      >
                        <Text>723</Text> Comments
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          setCommentModalVisible(!commentModalVisible)
                        }
                        style={{
                          paddingLeft: 20,
                          paddingTop: 15,
                          paddingRight: 15,
                        }}
                      >
                        <Entypo name="cross" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.15)",
                        marginBottom: 10,
                      }}
                    ></View>
                    <ScrollView>
                      {commentData.map((comment, i) => {
                        return (
                          <View key={i}>
                            <View style={styles.userDetailBox}>
                              <Image
                                style={{
                                  height: 30,
                                  width: 30,
                                  borderRadius: 15,
                                }}
                                source={{ uri: comment.picture }}
                              />
                              <Text style={{ paddingLeft: 8 }}>
                                @{comment.username}
                              </Text>
                              {comment.author && (
                                <Text
                                  style={{ paddingLeft: 8, color: "#FF0000" }}
                                >
                                  <AntDesign
                                    name="checkcircle"
                                    size={15}
                                    color="#FF0000"
                                  />
                                  Author
                                </Text>
                              )}
                              <Text
                                style={{ paddingLeft: 8, color: "#A2A2A2" }}
                              >
                                {comment.timeStamp}
                              </Text>
                            </View>
                            <View style={styles.commentTxtBox}>
                              <Text
                                style={{
                                  fontFamily: "RubikLight",
                                  fontSize: 16,
                                  paddingRight: 15,
                                }}
                              >
                                {comment.comment}
                              </Text>
                            </View>
                            <View style={styles.commentIconBox}>
                              <TouchableOpacity
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                }}
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
                                    <AntDesign
                                      name="heart"
                                      size={20}
                                      color="red"
                                    />
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
                                {commentLikeNum}
                              </Text>
                            </View>
                          </View>
                        );
                      })}
                    </ScrollView>
                    <View
                      style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.15)",
                        marginTop: 0,
                      }}
                    ></View>
                    <View style={styles.commentInputBox}>
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
                        right={
                          <TextInput.Icon name="send" color="red" size={25} />
                        }
                      />
                    </View>
                  </View>
                </Modal>

                <TouchableOpacity
                  onPress={() => setCommentModalVisible(false)}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Ionicons
                    name="chatbubble-outline"
                    size={25}
                    color="#9E9E9E"
                  />
                  <Text
                    style={{
                      fontFamily: "RubikLight",
                      fontSize: 13,
                      marginTop: 2,
                      marginLeft: 10,
                    }}
                  >
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
            <Text></Text>
            {initialState.length - 1 !== i && (
              <View
                style={{
                  height: 10,
                  width: windowWidth,
                  backgroundColor: "rgb(245,245,245)",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>
            )}
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
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  commentButtonBox: {
    flexDirection: "row",
  },
  likeButtonBox: {
    flexDirection: "row",
  },
  //---modal style
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
  commentModalMainBox: {
    marginTop: "auto",
  },
  deletebutton: {
    marginLeft: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
  // comment modal css
  commentTopBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    marginLeft: 10,
  },
  userDetailBox: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
  commentTxtBox: {
    marginLeft: 50,
  },
  commentIconBox: {
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 55,
    flexDirection: "row",
  },
  commentInputBox: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
  },
  commentInput: {
    minHeight: 30,
    fontSize: 14,
    fontFamily: "RubikRegular",
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 25,
    backgroundColor: "#F7F7F7",
  },
});
//old desgin----
{
  /* <View style={styles.likeButtonBox}>
                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => {
                    addLikeNum();
                  }}
                >
                  {likeNum == 0 ? (
                    <FontAwesome5 name="heart" size={27} color="#9E9E9E" />
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        removeLikeNum();
                      }}
                    >
                      <AntDesign name="heart" size={27} color="red" />
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              </View>
              <View style={{marginLeft:10}}>
              <TouchableOpacity style={{ marginLeft: 15 }}>
                <FontAwesome5 name="comment-dots" size={27} color="#9E9E9E" />
              </TouchableOpacity>
              </View>
              <View style={{marginLeft:25}}>
              <TouchableOpacity
               
                onPress={() => setBookMark((prevBookMark) => !prevBookMark)}
              >
                {bookMark ? (
                  <FontAwesome name="bookmark-o" size={27} color="#9E9E9E" />
                ) : (
                  <FontAwesome name="bookmark" size={27} color="#9E9E9E" />
                )}
              </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:"row",position:"absolute",right:15,top:5}}>
                      <Text style={{color:"grey",fontFamily:"RubikLight"}}>{likeNum} Likes </Text>
                      <Text style={{color:"grey",fontFamily:"RubikLight"}}>720 Comments</Text>
                  </View> */
}
