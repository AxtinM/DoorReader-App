import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
// bgColor, color, text, navigation, route
const AccessBtn = (props) => {
  const { BR, flex ,bgColor, color, text, ...data } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: bgColor}}
      {...data}
    >
      <Text style={{ ...styles.text, color: color }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1/3,
        height: 40,
        width: 85,
        marginVertical: 10,
        justifyContent: "center",
        marginHorizontal: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default AccessBtn;
