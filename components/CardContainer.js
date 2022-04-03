import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import IconAws from "react-native-vector-icons/FontAwesome5";
import client from "../client";

const deleteTag = async (token, tag) => {
  const res = await client.delete(`/rfid/remove/${tag}`, {
    headers: { Authorization: `JWT ${token}` },
  });
  const data = await res.data;

  return data.deletedTag;
};

const CardContainer = ({ tag }) => {
  const { token, tags, setTags } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <IconAws name="credit-card" size={31} color="#4FBDBA" />
      </View>
      {/* <Text>number : </Text> */}
      <View style={styles.accessStyle}>
        <Text>{tag}</Text>
      </View>
      <Pressable
        style={styles.icon}
        onPress={async () => {
          const deletedTag = await deleteTag(token, tag);
          const updatedTags = tags.filter((t) => t.tagId !== deletedTag.tagId);
          setTags([...updatedTags]);
        }}
      >
        <IconFeather name="trash" size={15} color="#FE354D" />
      </Pressable>
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  container: {
    width: "40%",
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
