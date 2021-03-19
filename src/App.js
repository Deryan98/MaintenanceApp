import React, { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
//navigation
import MainNavigator from "./navigation/MainNavigator";
const MainNavigatorMemo = memo(MainNavigator);
export default function App() {
  return (
    <NavigationContainer>
      <MainNavigatorMemo />
    </NavigationContainer>
  );
}
