import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Keyboard,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import { TextInput } from "react-native-paper";
import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";
export default function AccountSetting({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState(true);
  const [newPassword, setNewPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  return (
    <SafeAreaView>
      <ScrollView style={{ minHeight: 875 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={[styles.container, {}]}>
          <ImageBackground
            style={{ minHeight: 875 }}
            source={require("../../assets/logo-screeen-background.png")}
            resizeMode="cover"
          >
            <View style={styles.settingMainBox}>
              <View style={styles.settingTxtBox}>
                <Text style={styles.settingTxt}>Account</Text>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.doneTxtBox}
                >
                  <Text style={{ paddingRight: 15 }}>Done</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.settingBox}>
                <View>
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
                          paddingTop: 20,
                          paddingLeft: 15,
                          paddingBottom: 10,
                          fontFamily: "RubikSemiBold",
                          fontSize: 18,
                        }}
                      >
                        Change Password
                      </Text>
                    </View>
                    <View style={styles.topModalTxtBox}>
                      <Text style={styles.topModalTxt}>
                        Set the new password for your account so you can login
                        and access all the features.
                      </Text>
                    </View>
                    <View style={styles.textInputBox}>
                      <TextInput
                        secureTextEntry={oldPassword}
                        placeholder="Old Password"
                        fontFamily="RubikRegular"
                        underlineColor="transparent"
                        mode="outlined"
                        right={
                          oldPassword ? (
                            <TextInput.Icon
                              onPress={() => {
                                setOldPassword(false);
                                Keyboard.dismiss();
                              }}
                              name="eye-off-outline"
                              color="#67729429"
                            />
                          ) : (
                            <TextInput.Icon
                              onPress={() => {
                                setOldPassword(true);
                                Keyboard.dismiss();
                              }}
                              name="eye"
                              color="#677294"
                            />
                          )
                        }
                        activeOutlineColor="#67729429"
                        outlineColor="#67729429"
                      />
                    </View>
                    <View style={styles.textInputBox}>
                      <TextInput
                        secureTextEntry={newPassword}
                        placeholder="New Password"
                        fontFamily="RubikRegular"
                        underlineColor="transparent"
                        mode="outlined"
                        right={
                          newPassword ? (
                            <TextInput.Icon
                            onPress={() => {
                              setNewPassword(false);
                              Keyboard.dismiss();
                            }}
                              name="eye-off-outline"
                              color="#67729429"
                            />
                          ) : (
                            <TextInput.Icon
                            onPress={() => {
                              setNewPassword(true);
                              Keyboard.dismiss();
                            }}
                              name="eye"
                              color="#677294"
                            />
                          )
                        }
                        activeOutlineColor="#67729429"
                        outlineColor="#67729429"
                      />
                    </View>
                    <View style={styles.textInputBox}>
                      <TextInput
                        secureTextEntry={confirmPassword}
                        placeholder="Re-enter Password"
                        fontFamily="RubikRegular"
                        underlineColor="transparent"
                        mode="outlined"
                        right={
                          confirmPassword ? (
                            <TextInput.Icon
                            onPress={() => {
                              setConfirmPassword(false);
                              Keyboard.dismiss();
                            }}
                              name="eye-off-outline"
                              color="#67729429"
                            />
                          ) : (
                            <TextInput.Icon
                            onPress={() => {
                              setConfirmPassword(true);
                              Keyboard.dismiss();
                            }}
                              name="eye"
                              color="#677294"
                            />
                          )
                        }
                        activeOutlineColor="#67729429"
                        outlineColor="#67729429"
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: "#fff",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      <CustomButton title={"Update Password"} />
                    </View>
                  </Modal>
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={styles.changePass}
                  >
                    <Feather name="key" size={24} color="#5E5E5E" />
                    <Text style={styles.txt}>Change Password</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalDeleteVisible}
                    onRequestClose={() => {
                      setModalDeleteVisible(!modalDeleteVisible);
                    }}
                  >
                    <TouchableWithoutFeedback
                      onPress={() => setModalDeleteVisible(!modalDeleteVisible)}
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
                          paddingTop: 20,
                          paddingLeft: 15,
                          paddingBottom: 10,
                          fontFamily: "RubikSemiBold",
                          fontSize: 22,
                        }}
                      >
                        Delete Account
                      </Text>
                    </View>
                    <View style={styles.topModalTxtBox}>
                      <Text style={styles.topModalTxt}>
                        Delete your account permanently. It will erase all your
                        profile data permanently.
                      </Text>
                    </View>
                    <View style={styles.deleteInputBox}>
                      <TextInput
                        placeholder="Tell us why you want to delete account!"
                        fontFamily="RubikRegular"
                        underlineColor="transparent"
                        mode="outlined"
                        activeOutlineColor="#677294"
                        outlineColor="#67729429"
                        multiline={true}
                        numberOfLines={5}
                      />
                    </View>
                    <View style={styles.sureTxtBox}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontFamily: "RubikSemiBold",
                          fontSize: 16,
                        }}
                      >
                        Are You Sure ?
                      </Text>
                    </View>
                    <View style={styles.yesNoBox}>
                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <AntDesign
                          name="checkcircleo"
                          size={24}
                          color="#FD97A0"
                        />
                        <Text
                          style={{
                            textAlign: "center",
                            fontFamily: "RubikRegular",
                            fontSize: 16,
                            paddingLeft: 5,
                            color: "#00000080",
                          }}
                        >
                          Yes
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text
                          style={{
                            textAlign: "center",
                            fontFamily: "RubikRegular",
                            fontSize: 16,
                            color: "#FF0000",
                            textDecorationLine: "underline",
                          }}
                        >
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        backgroundColor: "#fff",
                        paddingBottom: 10,
                        paddingTop: 3,
                      }}
                    >
                      <CustomButton disable={true} title={"Delete Account"} />
                    </View>
                  </Modal>

                  <TouchableOpacity
                    onPress={() => setModalDeleteVisible(!modalDeleteVisible)}
                    style={styles.changePass}
                  >
                    <MaterialIcons
                      name="block-flipped"
                      size={24}
                      color="#5E5E5E"
                    />
                    <Text style={styles.txt}>Delete Account</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {},
  settingMainBox: {
    marginTop: 35,
  },
  settingTxtBox: {
    marginTop: 20,
    marginLeft: 25,
    flexDirection: "row",
  },
  settingTxt: {
    fontFamily: "RubikSemiBold",
    fontSize: 20,
  },
  doneTxtBox: {
    position: "absolute",
    right: 10,
    top: 0,
  },
  settingBox: {
    marginTop: 40,
  },
  changePass: {
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 20,
  },
  txt: {
    paddingLeft: 15,
    paddingTop: 2,
    color: "#5E5E5E",
    fontFamily: "RubikRegular",
    fontSize: 18,
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
  deletebutton: {
    marginLeft: 20,
    paddingVertical: 8,
    flexDirection: "row",
  },
  topModalTxtBox: {
    backgroundColor: "#fff",
  },
  topModalTxt: {
    paddingLeft: 15,
    paddingRight: 10,
    fontFamily: "RubikLight",
    fontSize: 14,
    color: "#677294",
  },
  textInputBox: {
    backgroundColor: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  deleteInputBox: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  sureTxtBox: {
    backgroundColor: "#fff",
    alignContent: "center",
    paddingTop: 15,
  },
  yesNoBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 10,

    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
