import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function EditProfile({navigation}) {
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
  const pickCamera  = async () => {
    
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

   console.log(result)
};
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topMainBox}>
          <View></View>
          <TouchableOpacity onPress={() => navigation.navigate("BottomTabs")}>
            <Text style={{ paddingTop: 10, paddingRight: 15 }}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profilePcitureBox}>
          <Text style={{ fontFamily: "RubikBold", fontSize: 25 }}>
            Edit Profile
          </Text>
          <Text style={styles.editPictureTxt}>Change Profile Picture</Text>
          <Image
            style={{ height: 100, width: 100, borderRadius: 100 }}
            source={{ uri: "https://i.ibb.co/gWSky57/Oval.png" }}
          />
          <View style={styles.editPictureBox}>
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
                    backgroundColor: "white",
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
                  Profile Picture
                </Text>
                <View>
                  <TouchableOpacity onPress={pickCamera} style={styles.deletebutton}>
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
                  <TouchableOpacity onPress={pickImage} style={styles.deletebutton}>
                    <Ionicons
                      name="md-image-outline"
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
                      Upload from gallary
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.deletebutton}>
                    <Ionicons
                      name="remove-circle-outline"
                      size={25}
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
                      Remove Photo
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            {/*  */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <MaterialCommunityIcons
                name="image-plus"
                size={20}
                color="#F90217"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputFieldsBox}>
          <View>
            <Text style={styles.inputLableTxt}>Name</Text>
            <TextInput
              placeholderTextColor="#677294"
              placeholder="Ariana Barros"
              style={styles.textInputStyle}
            />
          </View>
          <View>
            <Text style={styles.inputLableTxt}>UserName</Text>
            <TextInput
              placeholderTextColor="#677294"
              placeholder="ArianaBarros55"
              style={styles.textInputStyle}
            />
          </View>
          <View>
            <Text style={styles.inputLableTxt}>Bio</Text>
            <TextInput
              placeholderTextColor="#677294"
              multiline={true}
              maxLength={30}
              placeholder="The greatest glory in living lies not in never falling, but in rising every time we fall"
              style={styles.bioInputStyle}
            />
          </View>
        </View>
        <View style={styles.inputButton}>
          <TouchableOpacity style={styles.roundButton1}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#fff",}}></View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  topMainBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoTxt: {
    fontFamily: "LeckerliOne",
    fontSize: 25,
  },
  profilePcitureBox: {
    marginTop: 20,
    alignItems: "center",
  },
  editPictureTxt: {
    fontFamily: "RubikLight",
    fontSize: 12,
    paddingTop: 15,
    paddingBottom: 15,
  },
  editPictureBox: {
    height: 25,
    width: 25,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginLeft: 65,
    marginTop: -25,
  },
  inputFieldsBox: {
    marginTop: 20,
  },
  inputLableTxt: {
    paddingLeft: 35,
    paddingBottom: 5,
    paddingTop: 20,
    fontFamily: "RubikLight",
    fontSize: 12,
    color: "#999999",
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    minWidth: 300,
    minHeight: 50,
    fontSize: 16,
    paddingLeft: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  bioInputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    minWidth: 300,
    minHeight: 50,
    fontSize: 14,
    paddingLeft: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  //--
  inputButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    paddingBottom: 60,
  },
  buttonText: {
    color: "white",
    fontFamily: "RubikSemiBold",
  },
  roundButton1: {
    width: 250,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#F90217",
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
