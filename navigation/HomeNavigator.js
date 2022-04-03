import React from "react";
import WelcomePage from "../screens/WelcomePage";
import UsersScreen from "../screens/UsersScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddUserScreen from "../screens/AddUserScreen";
import ChangeUserAccess from "../screens/ChangeUserAccess";
import DoorReadersScreen from "../screens/DoorReadersScreen";
import AddDoorReaderNextScreen from "../screens/AddDoorReaderNextScreen";
import RfidScreen from "../screens/RfidScreen";
import AddDoorReaderScreen from "../screens/AddDoorReaderScreen";
import AddRfidCard from "../screens/AddRfidCard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

const WelcomeView = ({ navigation }) => {
  return (
    <>
      <WelcomePage navigation={navigation} />
    </>
  );
};

const UsersView = ({ navigation }) => {
  return (
    <>
      <UsersScreen navigation={navigation} />
    </>
  );
};

const DoorReadersView = ({ navigation }) => {
  return (
    <>
      <DoorReadersScreen navigation={navigation} />
    </>
  );
};

const RfidView = ({ navigation }) => {
  return (
    <>
      <RfidScreen navigation={navigation} />
    </>
  );
};

const NotificationView = ({ navigation }) => {
  return (
    <>
      <NotificationScreen navigation={navigation} />
    </>
  );
};

const ProfileView = ({ navigation }) => {
  return (
    <>
      <ProfileScreen navigation={navigation} />
    </>
  );
};

const AddUserView = ({ navigation }) => {
  return (
    <>
      <AddUserScreen navigation={navigation} />
    </>
  );
};

const ChangeUserView = ({ navigation, route }) => {
  return (
    <>
      <ChangeUserAccess navigation={navigation} route={route} />
    </>
  );
};

const AddDoorReaderView = ({ navigation }) => {
  return (
    <>
      <AddDoorReaderScreen navigation={navigation} />
    </>
  );
};

const AddDoorReaderNextView = ({ navigation, route }) => {
  return (
    <>
      <AddDoorReaderNextScreen navigation={navigation} route={route} />
    </>
  );
};

const AddRfidCardView = ({ navigation }) => {
  return (
    <>
      <AddRfidCard navigation={navigation} />
    </>
  );
};

const MainStack = createBottomTabNavigator();
const UserStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const UserDoorStack = createNativeStackNavigator();
const DoorReaderStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const options = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: "#e91e63",
  tabBarStyle: { height: 60, backgroundColor: "#4FBDBA" },
};
const homeOptions = { headerShown: false };
// const userDoorOptions = { headerShown: false };
const profileOptions = { headerShown: false };

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={profileOptions}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileView}
        options={profileOptions}
      />
    </ProfileStack.Navigator>
  );
};

const AddDRNavigation = () => {
  return (
    <DoorReaderStack.Navigator
      initialRouteName="addName"
      screenOptions={profileOptions}
    >
      <DoorReaderStack.Screen
        name="addName"
        component={AddDoorReaderView}
        options={profileOptions}
      />
      <DoorReaderStack.Screen
        name="addMac"
        component={AddDoorReaderNextView}
        options={profileOptions}
      />
    </DoorReaderStack.Navigator>
  );
};

const UserNavigation = () => {
  return (
    <UserStack.Navigator
      screenOptions={profileOptions}
      initialRouteName="AddUser"
    >
      <UserStack.Screen
        name="AddUser"
        component={AddUserView}
        options={{ headerShown: false }}
      />
      <UserStack.Screen
        name="ChangeUser"
        component={ChangeUserView}
        options={{ headerShown: false }}
      />
    </UserStack.Navigator>
  );
};

const UserDoorNavigation = () => {
  return (
    <UserDoorStack.Navigator
      initialRouteName="MainUsers"
      screenOptions={options}
    >
      <UserDoorStack.Screen
        name="MainUsers"
        component={UsersView}
        options={profileOptions}
      />
      <UserDoorStack.Screen
        name="AddChange"
        component={UserNavigation}
        options={profileOptions}
      />
      <UserDoorStack.Screen
        name="addRfid"
        component={AddRfidCardView}
        options={profileOptions}
      />
      <UserDoorStack.Screen
        name="Rfid"
        component={RfidView}
        options={{ headerShown: false }}
      />
      <UserDoorStack.Screen
        name="DoorReaders"
        component={DoorReadersView}
        options={profileOptions}
      />
      <UserDoorStack.Screen
        name="AddDoorReader"
        component={AddDRNavigation}
        options={{ headerShown: false }}
      />
    </UserDoorStack.Navigator>
  );
};

{
}

const MainNavigation = () => {
  return (
    <MainStack.Navigator initialRouteName="Welcome" screenOptions={options}>
      <MainStack.Screen
        name="Welcome"
        component={WelcomeView}
        options={{
          ...options,
          tabBarIcon: () => <Image source={require("../assets/home.png")} />,
        }}
      />
      <MainStack.Screen
        name="UserDoorScreen"
        component={UserDoorNavigation}
        options={{
          ...options,
          tabBarIcon: () => <Image source={require("../assets/menu.png")} />,
        }}
      />
      <MainStack.Screen
        name="ProfileScreen"
        component={ProfileNavigation}
        options={{
          ...options,
          tabBarIcon: () => <Image source={require("../assets/profile.png")} />,
        }}
      />
    </MainStack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Main" screenOptions={homeOptions}>
      <HomeStack.Screen
        name="Main"
        component={MainNavigation}
        options={homeOptions}
      />
      <HomeStack.Screen
        name="Notification"
        component={NotificationView}
        options={homeOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
