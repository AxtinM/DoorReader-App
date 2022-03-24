import React from "react";
import WelcomePage from "../screens/WelcomePage";
import UsersScreen from "../screens/UsersScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddUserScreen from "../screens/AddUserScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const MainStack = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const UserDoorStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const options = { headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#e91e63', tabBarStyle: { height: 60, backgroundColor: "#4FBDBA"} };
const homeOptions = { headerShown: false }
const userDoorOptions = { headerShown: false }
const profileOptions = { headerShown: false }

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile" screenOptions={profileOptions}>
      <ProfileStack.Screen name="Profile"
        component={ProfileView}
        options={profileOptions} />
        </ProfileStack.Navigator>
  )
}

const UserDoorNavigation = () => {
  return (
    <UserDoorStack.Navigator initialRouteName="Users" screenOptions={options}>
      <UserDoorStack.Screen name="Users"
        component={UsersView}
        options={profileOptions} />
      <UserDoorStack.Screen name="AddUser"
        component={AddUserView}
        options={{ headerShown: false }} />
    </UserDoorStack.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <MainStack.Navigator initialRouteName="Welcome" screenOptions={options}>
      <MainStack.Screen
        name="Welcome"
        component={WelcomeView}
        options={{...options, tabBarIcon: () => <Image source={require('../assets/home.png')} />}}
      />
      <MainStack.Screen name="UserDoorScreen" component={UserDoorNavigation} options={{...options, tabBarIcon: () => <Image source={require('../assets/menu.png')} />}} />
      <MainStack.Screen name="ProfileScreen" component={ProfileNavigation} options={{...options, tabBarIcon: () => <Image source={require('../assets/profile.png')} />}} />
    </MainStack.Navigator>
  )
}


const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Main" screenOptions={homeOptions} >
      <HomeStack.Screen name="Main" component={MainNavigation} options={homeOptions}/>
      <HomeStack.Screen name="Notification"
        component={NotificationView} options={homeOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
