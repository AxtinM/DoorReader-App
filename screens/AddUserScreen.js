import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useContext} from 'react'
import TopView from "../components/TopView"
import NavigationBtn from "../components/buttons/NavigationBtn";
import InputBox from "../components/input/InputBox1";
import Btn from "../components/buttons/Btn1";

const AddUserScreen = ({ navigation }) => {
    
    const { devices } = useContext(UserContext);

    

    const renderItem = (i) => {
        console.log("first")
        console.log(i);
        return (
            <Btn BR={10} bgColor="#4FBDBA" color="#FFFFFF" text={`${i.item.deviceName}`} flex={1/3}  />
        )
    }
    console.log(devices);

  return (
    <View style={styles.container}>
        <TopView label="List of users" />
        <View style={styles.topView}>
            <NavigationBtn label="< DooReaders" />
          </View>
          <View
                style={{
                    flex: 0.4,
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <InputBox
                  label="Name :"
                  autoCapitalize="none"
                  keyboardType="default"
                  placeholder="name"
                />
                <InputBox
                  label="Surname :"
                  autoCapitalize="none"
                  keyboardType="default"
                  placeholder="surname"
                />
                <InputBox
                  label="Address mail :"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholder="exmpl@gmail.com"
                />
          </View>
          <View style={styles.bottomView}>
              <View style={styles.bottomInnerTopView}>
                  <Text style={styles.textBottom}>Access to :</Text>
                  <FlatList
                    data={devices}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    // extraData={selectedId}
                    numColumns={3}
                  />
              </View>
          </View>
    </View>
  )
}

export default AddUserScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    topView: {
        flex: 0.08,
        width: "100%",
        justifyContent: "center",
        paddingLeft: 22,
        // borderWidth: 1,
    },
    bottomView: {
        flex: 0.3,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center"

    },
    bottomInnerTopView: {
        width: "80%",
        marginTop: 30,
        // borderWidth: 1,
    },
    textBottom: {
        fontSize: 16,
        color: "#4FBDBA",
    }
})