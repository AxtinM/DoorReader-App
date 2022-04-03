import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./navigation/AuthNavigation";
import HomeNavigator from "./navigation/HomeNavigator";
import UserContext from "./context";

const App = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [tags, setTags] = useState([]);
  const [devices, setDevices] = useState([]);
  const [token, setToken] = useState(null);
  // const [isLoading, setIsLoading] = useState(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        token,
        setToken,
        devices,
        setDevices,
        tags,
        setTags,
      }}
    >
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
