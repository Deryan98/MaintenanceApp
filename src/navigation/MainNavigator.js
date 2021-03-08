import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";

export default function MainNavigator() {
  const Stack = createStackNavigator();
  const HeaderHeight = Dimensions.height * 0.12;
  const HeaderTitleHeight = HeaderHeight / 3.5;

  /**
   * Esta función obtiene el título en función de los nombres de
   * ruta de las BottomTabs
   * @param {*} route - Objeto de rutas
   * @returns Te devuelve el título
   */
  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route);

    switch (routeName) {
      case "Home":
        return "Lafarge Holcim";
      case "User":
        return "Lafarge Holcim";
    }
  }

  return (
    <Stack.Navigator style={{ backgroundColor: Colors.complementary }}>
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={({ route }) => ({
          title: "Lafarge Holcim", //Fix
          headerTitle: getHeaderTitle(route),
          headerTintColor: Colors.dominant,
          headerStyle: {
            height: HeaderHeight,
            backgroundColor: Colors.complementary,
          },
          headerTitleStyle: {
            fontSize: HeaderTitleHeight,
          },
        })}
      />
    </Stack.Navigator>
  );
}
