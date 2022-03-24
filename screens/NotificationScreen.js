import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import TopView from "../components/TopView";
import { getStatusBarHeight } from "react-native-status-bar-height";

const NotificationScreen = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <View style={styles.container}>
      <TopView label="Notification" />

      <View style={styles.notificationContainer}>
        <View style={styles.notificationInnerContainer}>
          {arr.map((elem, i) => (
            <View style={styles.notification} key={i}></View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingTop: getStatusBarHeight(),
  },
  notificationContainer: {
    flex: 0.9,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  notificationInnerContainer: {
    flex: 0.8,
    width: "85%",
    // marginHorizontal: "10%",
    backgroundColor: "#F5F5F5",
    // borderWidth: 1,
  },
  notification: {
    flex: 0.1,
    borderBottomWidth: 1.5,
    borderColor: "rgba(154, 151, 154, 0.47)",
  },
});
