import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
// bgColor, color, text, navigation, route
const Btn1 = (props) => {
  const { BR, flex ,bgColor, color, text, ...data } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: bgColor, borderRadius: BR !== undefined ? BR : 30}}
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
    // borderRadius: BR !== undefined ? borderRadius : 30,
    marginVertical: 10,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default Btn1;
