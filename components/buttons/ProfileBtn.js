import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

// bgColor, color, text, navigation, route
const ProfileBtn = (props) => {
  const { bgColor, color, text, ...data } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: bgColor }}
      {...data}
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
    marginVertical: 10,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default ProfileBtn;
