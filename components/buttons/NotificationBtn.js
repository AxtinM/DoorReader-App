import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const NotificationBtn = ({ navigation, route }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="bell-o" size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default NotificationBtn;

const styles = StyleSheet.create({
  container: {
    width: 46,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4FBDBA",
    borderRadius: 10,
    borderTopRightRadius: 50,
  },
});
