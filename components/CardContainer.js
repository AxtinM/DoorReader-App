import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import IconAws from "react-native-vector-icons/FontAwesome5";


const CardContainer = ({ name, tag }) => {
  const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <IconAws name="credit-card" size={40} color="#4FBDBA" />
      </View>
      {/* <Text>number : </Text> */}
      <View style={styles.accessStyle}>
        <Text>{tag}</Text>
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

export default CardContainer;

const styles = StyleSheet.create({
  container: {
    width: "43%",
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 15,
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
