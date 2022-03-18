import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PasswordForgottenScreen from "../screens/PasswordForgottenScreen";
import PassCodeScreen from "../screens/PassCodeScreen";
import RetypePasswordScreen from "../screens/RetypePasswordScreen";

const FirstPassView = ({ navigation }) => {
  return (
    <>
      <PasswordForgottenScreen navigation={navigation} />
    </>
  );
};

const SecondPassView = ({ navigation }) => {
  return (
    <>
      <PassCodeScreen navigation={navigation} />
    </>
  );
};

const FinalPassView = ({ navigation }) => {
  return (
    <>
      <RetypePasswordScreen navigation={navigation} />
    </>
  );
};

const ForgottenPassStack = createNativeStackNavigator();

const ForgottenPassNavigation = () => {
  return (
    <ForgottenPassStack.Navigator initialRouteName="Email">
      <ForgottenPassStack.Screen
        name="Email"
        component={FirstPassView}
        options={{ headerShown: false }}
      />
      <ForgottenPassStack.Screen
        name="Code"
        component={SecondPassView}
        options={{ headerShown: false }}
      />
      <ForgottenPassStack.Screen
        name="ReTypePass"
        component={FinalPassView}
        options={{ headerShown: false }}
      />
    </ForgottenPassStack.Navigator>
  );
};

export default ForgottenPassNavigation;
