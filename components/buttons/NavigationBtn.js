import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const navigationBtn = ({ label }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default navigationBtn;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4FBDBA",
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
  },
});
