import { View, Text, StyleSheet } from "react-native";
import React from "react";
import NotificationBtn from "./buttons/NotificationBtn";

const TopView = ({ navigation, label }) => {
  console.log(label);
  return (
    <View style={styles.logoView}>
      <Text style={styles.logoText}>LOGO</Text>
      {label === undefined ? <></> : <Text style={styles.label}>{label}</Text>}
      <NotificationBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  logoView: {
    flex: 0.1,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    width: "100%",
    // borderWidth: 1,
  },
  label: {
    paddingTop: 40,
    fontSize: 18,
    color: "#BF1363",
  },
  logoText: {
    fontSize: 20,
  },
});

export default TopView;
