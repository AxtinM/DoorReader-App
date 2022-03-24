import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const InputBox1 = (props) => {
  const { label, ...data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.box} {...data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    marginLeft: 20,
    marginTop: 20,
  },
  label: {
    paddingLeft: 16,
  },
  labelText: {
    color: "#4FBDBA",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
  },
  box: {
    width: "90%",
    borderBottomWidth: 1.5,
    borderColor: "#4FBDBA",
  },
});

export default InputBox1;
