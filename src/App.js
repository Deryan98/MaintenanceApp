import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//navigation
import MainNavigator from "./navigation/MainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
