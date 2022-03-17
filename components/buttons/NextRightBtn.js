import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const NextRightBtn = ({ name, changeScreen }) => {
  return (
    <TouchableOpacity style={styles.nextRight} onPress={() => changeScreen}>
      <Icon name={name} size={50} color="#4FBDBA" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nextRight: {},
});

export default NextRightBtn;
