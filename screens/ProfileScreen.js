import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import React, { useContext } from "react";
import TopView from "../components/TopView";
import InputBox from "../components/input/InputBox1";
import ProfileBtn from "../components/buttons/ProfileBtn";
import { getStatusBarHeight } from "react-native-status-bar-height";

const ProfileScreen = ({ navigation }) => {
  const { user, setToken } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TopView label="Profile" navigation={navigation} />
        <Image source={require("../assets/profilePic.png")} />
        <Text style={styles.topText}>{user.identifier}</Text>
      </View>
      <View
        style={{
          flex: 0.4,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <InputBox
          label="Name :"
          autoCapitalize="none"
          keyboardType="default"
          value={user.fname}
        />
        <InputBox
          label="Surname :"
          autoCapitalize="none"
          keyboardType="default"
          value={user.lname}
        />
        <InputBox
          label="Address mail :"
          autoCapitalize="none"
          keyboardType="email-address"
          value={user.email}
        />
      </View>
      <View style={styles.bottomView}>
        <Pressable>
          <Text style={styles.bottomText}>Change password !</Text>
        </Pressable>
        <View style={styles.buttons}>
          <ProfileBtn
            text="Disconnect"
            color="#fff"
            bgColor="#4FBDBA"
            onPress={() => setToken(null)}
          />
          <ProfileBtn
            navigation={navigation}
            text="See history"
            color="#fff"
            bgColor="#4FBDBA"
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: getStatusBarHeight(),
  },
  topView: {
    flex: 0.35,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    // borderWidth: 1
  },
  topText: {
    fontSize: 17,
    color: "#9A979A",
    marginTop: 10,
  },
  bottomView: {
    flex: 0.2,
    paddingVertical: 15,
    paddingTop: 20,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 16,
    color: "#BF1363",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    // borderWidth: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
