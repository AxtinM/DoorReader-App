import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import HomeImg from "../assets/home_img.png";
import TopView from "../components/TopView";

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopView />
      <View style={styles.topView}>
        <View style={styles.middleView}>
          <Text style={styles.middleText}>
            The access control readers use credentials which can be cards that
            fit in your wallet. Our door readers can also use your smartphone to
            open the door.
          </Text>
        </View>
      </View>
      <ImageBackground source={HomeImg} resizeMode="cover" style={styles.img} />
      <View style={{ flex: 0.65, width: "100%" }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: getStatusBarHeight(),
    width: "100%",
  },
  topView: {
    flex: 0.4,
    flexDirection: "column",
    paddingHorizontal: 30,
    width: "100%",
  },
  middleView: {
    flex: 0.7,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  middleText: {
    lineHeight: 22,
    textAlign: "center",
    fontSize: 18,
  },
  img: {
    flex: 1,
    justifyContent: "center",
    width: 346,
    height: 313,
    position: "absolute",
    bottom: "10%",
    zIndex: 0,
    marginTop: 30,
  },
});

export default WelcomePage;
