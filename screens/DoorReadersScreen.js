import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TopView from "../components/TopView";
import NavigationBtn from "../components/buttons/NavigationBtn";
import ReaderContainer from "../components/ReaderContainer";
import Btn1 from "../components/buttons/Btn1";


const DoorReadersScreen = ({ navigation }) => {
  const { devices } = useContext(UserContext);
  const [readers, setReaders] = useState([]);

  useEffect(() => {
    setReaders(devices)
  }, [readers]);

  const renderItem = (i) => {
    return (
      <ReaderContainer name={i.item.deviceName} mac={i.item.macAddress} />
    )
  }

  return (
    <View style={styles.container}>
      <TopView navigation={navigation} label="List of DoorReaders" />
      <View style={styles.topView}>
        <NavigationBtn onPress={() => navigation.goBack()} label="Users >" />
      </View>
      <View style={styles.usersContainer}>
        <FlatList style={styles.usersScroll}
          data={readers}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={2}
        />
        <View style={styles.bottomUsersContainer}>
          <Btn1
            text="add"
            color="#fff"
            bgColor="#BF1363"
            onPress={() => navigation.navigate("AddDoorReader")}
          />
        </View>
      </View>
    </View>
  );
};

export default DoorReadersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: getStatusBarHeight(),
    backgroundColor: "#fff",
  },
  topView: {
    flex: 0.08,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 22,
  },
  usersContainer: {
    flex: 0.8,
    width: "85%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bottomUsersContainer: {
    flex: 0.2,
    minHeight: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
    // borderWidth:1
  },
});
