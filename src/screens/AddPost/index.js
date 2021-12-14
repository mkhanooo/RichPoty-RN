import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
  Image,
  useWindowDimensions,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
export default function AddPost() {
  const userData = {
    name: "Ariana Barros",
    picture: "https://i.ibb.co/gWSky57/Oval.png",
  };
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
  };
  const pickVideoCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <View style={styles.topTxt}>
          <Text style={styles.logoTxt}>RichPoty</Text>
        </View>
        <View style={styles.topMainBox}>
          <View style={styles.pictureBox}>
            <Image style={styles.picture} source={{ uri: userData.picture }} />
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.nameTxt}>{userData.name}</Text>
          </View>
          <View style={styles.buttonMainBox}>
            <TouchableOpacity style={styles.buttonBox}>
              <Text style={styles.buttonTxt}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textInputBox}>
          <TextInput
            placeholder="Write something you want !"
            style={[styles.textInput, { maxWidth: windowWidth - 60 }]}
            multiline={true}
          />
          <View style={{ position: "absolute", right: 30, top: 25 }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
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
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  },
                ]}
              >
                <Text
                  style={{
                    paddingTop: 15,
                    paddingLeft: 15,
                    paddingBottom: 10,
                    fontFamily: "RubikSemiBold",
                    fontSize: 18,
                  }}
                >
                  Add Photo or Video
                </Text>
                <View>
                  <TouchableOpacity
                    onPress={pickCamera}
                    style={styles.deletebutton}
                  >
                    <MaterialCommunityIcons
                      name="camera-plus-outline"
                      size={22}
                      color="#677294"
                    />
                    <Text
                      style={{
                        paddingTop: 5,
                        paddingLeft: 10,
                        fontFamily: "RubikRegular",
                        color: "#677294",
                      }}
                    >
                      Take a Photo
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={pickVideoCamera}
                    style={styles.deletebutton}
                  >
                    <Ionicons
                      name="videocam-outline"
                      size={22}
                      color="#677294"
                    />
                    <Text
                      style={{
                        paddingTop: 4,
                        paddingLeft: 10,
                        
                        color: "#677294",
                        fontFamily: "RubikRegular",
                      }}
                    >
                    Take a Video
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={pickImage}
                    style={styles.deletebutton}
                  >
                    <Ionicons
                      name="md-image-outline"
                      size={22}
                      color="#677294"
                    />
                    <Text
                      style={{
                        paddingTop: 4,
                        paddingLeft: 10,
                        paddingBottom: 12,
                        color: "#677294",
                        fontFamily: "RubikRegular",
                      }}
                    >
                      Upload from gallary
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Entypo name="attachment" size={20} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
            
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: "#fff",
  },
  topTxt: {
    alignItems: "center",
  },
  logoTxt: {
    fontFamily: "LeckerliOne",
    fontSize: 30,
  },
  topMainBox: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 15,
  },
  pictureBox: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  picture: {
    height: 50,
    width: 50,
  },
  nameBox: {
    justifyContent: "center",
  },
  nameTxt: {
    paddingLeft: 15,
    fontFamily: "RubikRegular",
    fontSize: 15,
  },
  buttonMainBox: {
    height: 35,
    width: 65,

    position: "absolute",
    right: 20,
    top: 10,
  },
  buttonBox: {
    height: 35,
    width: 65,
    borderRadius: 5,
    backgroundColor: "#FD97A0",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
  buttonTxt: {},
  textInputBox: {
    marginTop: 15,
    marginLeft: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  textInput: {
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 20,
  },
  //---modal style
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  modalmainbox: {
    height: "auto",
    marginTop: "auto",
    // marginBottom: 3,
  },
  deletebutton: {
    // alignItems: "center",
    // justifyContent: "center",

    marginLeft: 20,
    paddingVertical: 8,
    flexDirection: "row",

    // borderWidth: 0.3,
    // borderColor: "lightgrey",
    // borderRadius: 4,
    // elevation: 3,
  },
});
