import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5'

const AddBtn = (props) => {
  const { ...data } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      {...data}
    >
      <Text style={{ ...styles.text }}>Add</Text>
      <Icon name="check-double" size={14} color='#fff' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 34,
    width: 67,
    marginVertical: 10,
    justifyContent: "center",
    backgroundColor: "#4FBDBA",
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
    alignSelf: "flex-end",
    marginRight: "9%"
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff"
  },
});

export default AddBtn;
