import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./HomeNavigation";
import AuthNavigation from "./AuthNavigation";
import { auth } from "../../firebase";
import HomeScreen from "../screen/HomeScreen";

const NavRoute = () => {
console.log(auth.currentUser?.email)
  return (
    <NavigationContainer>
      {auth.currentUser ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default NavRoute;
