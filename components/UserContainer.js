import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome5";
import client from "../client";

const deleteUser = async (token, id) => {
  try {
    const res = await client.post(
      "/user/remove",
      { identifier: id },
      { headers: { Authorization: `JWT ${token}` } }
    );
    const data = await res.data;
    return data.deletedUser;
  } catch (err) {
    console.log(err);
  }
};

const UserContainer = ({
  name,
  firstDoor,
  secondDoor,
  identifier,
  navigation,
}) => {
  const { token, users, setUsers } = useContext(UserContext);
  console.log("firstDoor", firstDoor);
  console.log("secondDoor", secondDoor);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Pressable
          style={styles.icon}
          onPress={async () => {
            const deletedUser = await deleteUser(token, identifier);
            const updatedUsers = users.filter(
              (user) => user._id !== deletedUser._id
            );
            setUsers(updatedUsers);
          }}
        >
          <IconAnt
            name="deleteuser"
            // style={styles.icon}
            size={20}
            color="#FE354D"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("AddChange", {
              screen: "ChangeUser",
              params: { identifier },
            });
          }}
        >
          <IconFont name="user-circle" size={30} color="#61dafb" />
        </Pressable>
      </View>
      <Text>{name}</Text>
      <Text>He has access to :</Text>
      <View style={styles.accessStyle}>
        {firstDoor !== undefined ? (
          <Text>{firstDoor.deviceName}</Text>
        ) : (
          <Text style={styles.noAccessStyle}>No access</Text>
        )}
        {secondDoor !== undefined ? (
          <Text>{secondDoor.deviceName}</Text>
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
  noAccessStyle: {
    color: "#FE354D",
    fontSize: 13,
  },
});
