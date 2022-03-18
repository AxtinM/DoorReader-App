import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Btn1 = ({ bgColor, color, text, navigation, route }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: bgColor }}
      onPress={() => navigation.navigate(route)}
    >
      <Text style={{ ...styles.text, color: color }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 110,
    borderRadius: 30,
    marginVertical: 5,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default Btn1;
