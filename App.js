import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./navigation/AuthNavigation";
import ForgottenPassNavigation from "./navigation/ForgottenPassNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
      {/* <ForgottenPassNavigation /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
