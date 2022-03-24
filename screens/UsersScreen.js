import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, {useEffect, useState, useContext} from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TopView from "../components/TopView";
import NavigationBtn from "../components/buttons/NavigationBtn";
import UserContainer from "../components/UserContainer";
import Btn1 from "../components/buttons/Btn1";
import client from "../client" 



const getUsers = async (token) => {
  try {
    const res = await client.get('/user/', {
      headers: {
        'Authorization': `JWT ${token}`
      }
    })
    const data = await res.data
    return data
    
  } catch (err) {
    console.log(err)
  }
}

const UsersScreen = ({navigation}) => {

  const {token} = useContext(UserContext)
  const [users, setUsers] = useState([])
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  useEffect(async () => {
    const res = await getUsers(token);
    console.log(res);
  }, [users])
  

  return (
    <View style={styles.container}>
      <TopView label="List of users" />
      <View style={styles.topView}>
        <NavigationBtn label="< DooReaders" />
      </View>
      <View style={styles.usersContainer}>
        <ScrollView style={styles.usersScroll}>
          {users.map((user, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              
            {index % 2 === 0 ? <UserContainer name={`${user.fname} ${user.lname}`} key={index} /> : <></>}
            {index % 2 === 1 ? <UserContainer name={`${user.fname} ${user.lname}`} key={index} /> : <></>}    
            </View>
          ))}
        </ScrollView>
        <View style={styles.bottomUsersContainer}>
         <Btn1 text="add" navigation={navigation} route='AddUser' color="#fff" bgColor="#BF1363" onPress={() => navigation.navigate("AddUser")}/>
      </View>
      </View>
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: getStatusBarHeight(),
    backgroundColor: "#fff"
  },
  topView: {
    flex: 0.08,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 22,
    // borderWidth: 1,
  },
  usersContainer: {
    flex: 0.8,
    width: "85%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  bottomUsersContainer: {
    flex: 0.1,
    minHeight: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    // borderWidth:1
  },
});
