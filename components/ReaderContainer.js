import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";

const ReaderContainer = ({ name, mac }) => {
  const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      </View>
      <Text>{name}</Text>
      <Text>Mac Address :</Text>
      <View style={styles.accessStyle}>
        <Text>{mac}</Text>
      </View>
        <IconFeather
          name="trash"
          style={styles.icon}
          size={15}
          color="#FE354D"
        />
    </View>
  );
};

export default ReaderContainer;

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: 125,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topView: {
    flex: 0.6,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  icon: {
    position: "absolute",
    bottom: 5,
    // left: 5,
  },
  accessStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    // borderWidth: 1,
  },
});
