import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome5";

const UserContainer = ({ name, doors, identifier, navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <IconAnt
          name="deleteuser"
          style={styles.icon}
          size={20}
          color="#FE354D"
        />
        <Pressable
          onPress={() => {
            navigation.navigate("AddChange", {
              screen: "ChangeUser",
              params: {
                identifier: identifier,
                lolipop: "hey",
              },
            });
          }}
        >
          <IconFont name="user-circle" size={30} color="#61dafb" />
        </Pressable>
      </View>
      <Text>{name}</Text>
      <Text>He has access to :</Text>
      <View style={styles.accessStyle}>
        {typeof doors[0].deviceName === "string" ? (
          <Text>{doors[0].deviceName}</Text>
        ) : (
          <></>
        )}
        {typeof doors[1].deviceName === "string" ? (
          <Text>{doors[1].deviceName}</Text>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default UserContainer;

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
    top: 5,
    left: 5,
  },
  accessStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    // borderWidth: 1,
  },
});
