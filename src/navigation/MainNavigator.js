import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";
import { ExitButton } from "../components/Buttons";
//screens
import ScannerScreen from "../screens/ScannerScreen";
//redux
import { useSelector, useDispatch } from "react-redux";
import { toggleAccess } from "../store/actions/access";
//constants
//constants
import { ScreensEnum } from "../constants/enum/ScreensEnum";
import { toggleOverlay } from "../store/actions/overlay";
const Stack = createStackNavigator();
const HeaderHeight = Dimensions.height * 0.1;
const HeaderTitleHeight = HeaderHeight / 3.5;

export default function MainNavigator() {
  /**
   * Memoizo este componente para
   * evitar que sea renderizado innecesariamente
   */
  const BottomTabsMemo = memo(BottomTabs);

  const { Home, Scanner } = ScreensEnum.MainNavigator;
  const { Maintenances, Dashboards } = ScreensEnum.BottomTabs;

  /**
   * Esta función obtiene el título en función de los nombres de
   * ruta de las BottomTabs cx
   * @param {route} route - Objeto de rutas
   * @returns Te devuelve el título
   */
  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route);

    switch (routeName) {
      case Maintenances:
        return "Lafarge Holcim";
      case Dashboards:
        return "Lafarge Holcim";
    }
  }

  const dispatch = useDispatch();
  const manageAccess = useSelector((state) => state.access);
  const manageOverlay = useSelector((state) => state.overlay);

  const ManageOverlayHandler = () => {
    console.log(`El Overlay desde MainNav es: ${manageOverlay}`);
    dispatch(toggleOverlay(manageOverlay));
    return console.log("Puro Redux");
  };

  const getHeaderRightComponent = () => {
    console.log(manageAccess);
    if (!manageAccess)
      return <ExitButton text="Salida" onPress={ManageOverlayHandler} />;
    return <></>;
  };

  return (
    <Stack.Navigator
      initialRouteName={Home}
      style={{ backgroundColor: Colors.complementary }}
    >
      <Stack.Screen
        name={Home}
        component={BottomTabsMemo}
        options={({ route }) => ({
          title: "Lafarge Holcim", //Fix
          headerTitle: getHeaderTitle(route),
          headerTintColor: Colors.dominant,
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerRight: () => getHeaderRightComponent(),
        })}
      />
      <Stack.Screen
        name={Scanner}
        component={ScannerScreen}
        options={({ route }) => ({
          title: "",
          headerShown: true,
          headerStyle: { ...styles.headerStyle, opacity: 0.7 },
          headerTintColor: Colors.dominant,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    height: HeaderHeight,
    backgroundColor: Colors.complementary,
  },
  headerTitleStyle: {
    fontSize: HeaderTitleHeight,
  },
});
