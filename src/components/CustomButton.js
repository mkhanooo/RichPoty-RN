import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomButton({ title, disable }) {
  return (
    <View style={styles.inputButton}>
      <TouchableOpacity
        style={[styles.roundButton1, { backgroundColor:disable?  "#F9021769": "#F90217"  }]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  inputButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingBottom: 10,
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
});
