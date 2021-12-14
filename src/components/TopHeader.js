import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";

export default function TopHeader({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topMainBox}>
        <View style={styles.logoTxtBox}>
          <Text style={styles.logoTxt}>RichPoty</Text>
        </View>
        <View style={styles.topMenuBox}>
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
                  onPress={() => {setModalVisible(!modalVisible), navigation.navigate("Setting")}}
                  style={styles.deletebutton}
                >
                  <AntDesign name="setting" size={23} color="#677294" />
                  <Text
                    style={{
                      paddingTop: 5,
                      paddingLeft: 10,
                      paddingBottom: 8,
                      color: "#677294",
                      fontFamily: "RubikRegular",
                    }}
                  >
                    Settings
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.deletebutton}
                >
                  <AntDesign name="logout" size={21} color="#677294" />
                  <Text
                    style={{
                      paddingTop: 3,
                      paddingLeft: 10,
                      paddingBottom: 8,
                      color: "#677294",
                      fontFamily: "RubikRegular",
                    }}
                  >
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons name="ios-menu" size={27} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  topMainBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  backButtonBox: {
    height: 30,
    width: 30,
    backgroundColor: "#3D405BCC",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  logoTxtBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoTxt: {
    fontFamily: "LeckerliOne",
    fontSize: 25,
  },
  topMenuBox: {
    position: "absolute",
    right: 20,
    top: 5,
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

    // borderWidth: 0.3,
    // borderColor: "lightgrey",
    // borderRadius: 4,
    // elevation: 3,
  },
});

{
  /* <View style={styles.backButtonBox}>
  <TouchableOpacity>
    <MaterialCommunityIcons name="less-than" size={23} color="#fff" />
  </TouchableOpacity>
</View> */
}
