import { View, Text } from "react-native";
import React from "react";
import AuthHomeScreen from "../screens/AuthHomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgottenPassNavigation from "./ForgottenPassNavigation";

const AuthHomeView = ({ navigation }) => {
  return (
    <>
      <AuthHomeScreen navigation={navigation} />
    </>
  );
};

const LoginView = ({ navigation }) => {
  return (
    <>
      <LoginScreen navigation={navigation} />
    </>
  );
};

const RegisterView = ({ navigation }) => {
  return (
    <>
      <RegisterScreen navigation={navigation} />
    </>
  );
};

const AuthStack = createNativeStackNavigator();

const options = { headerShown: false };

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName="AuthHome">
      <AuthStack.Screen
        name="AuthHome"
        component={AuthHomeView}
        options={options}
      />
      <AuthStack.Screen name="Login" component={LoginView} options={options} />
      <AuthStack.Screen
        name="Register"
        component={RegisterView}
        options={options}
      />
      <AuthStack.Screen
        name="PassStack"
        component={ForgottenPassNavigation}
        options={options}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
