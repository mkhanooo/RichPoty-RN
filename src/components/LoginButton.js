import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function LoginButton({title,path,handleGoogleSignin}) {
 
  return (
    <>
      <View style={styles.inputButton}>
        <TouchableOpacity onPress={handleGoogleSignin} style={styles.roundButton1}>
          <Image
            style={{ width: 18.7, height: 18.7,  }}
            source={{uri: path} }        />
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  inputButton: {
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "RubikLight",
    fontSize: 16,
    paddingLeft:10,
    paddingTop:3,
  },
  roundButton1: {
    width: 284,
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor:'#fff',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
});
