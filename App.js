import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./navigation/AuthNavigation";
import ForgottenPassNavigation from "./navigation/ForgottenPassNavigation";
import HomeNavigator from "./navigation/HomeNavigator";
import WelcomePage from "./screens/WelcomePage";
import NotificationScreen from "./screens/NotificationScreen";
import UsersScreen from "./screens/UsersScreen";
import UserContext from "./context";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  const [user, setUser] = useState({});
  const [devices, setDevices] = useState([]);
  const [token, setToken] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, devices, setDevices }}>
      <NavigationContainer>
        {token === null ? <AuthNavigation /> : <HomeNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
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
