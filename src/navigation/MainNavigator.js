import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";
import { ExitButton } from "../components/Buttons";
//redux
import { useSelector, useDispatch } from "react-redux";
import { toggleAccess } from "../store/actions/access";
//constants
const Stack = createStackNavigator();
const HeaderHeight = Dimensions.height * 0.1;
const HeaderTitleHeight = HeaderHeight / 3.5;

export default function MainNavigator() {
  /**
   * Memoizo este componente para
   * evitar que sea renderizado innecesariamente
   */
  const BottomTabsMemo = memo(BottomTabs);

  /**
   * Esta función obtiene el título en función de los nombres de
   * ruta de las BottomTabs cx
   * @param {route} route - Objeto de rutas
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

  // const dispatch = useDispatch();
  // const ManageAccessHandler = () => {
  //   const manageAccess = useSelector((state) => state.access.access);
  //   console.log(manageAccess);
  //   dispatch(toggleAccess(manageAccess));
  //   return console.log("Puro Redux");
  // };

  const manageAccess = useSelector((state) => state.access.access);
  const getHeaderRightComponent = () => {
    console.log(manageAccess);
    if (!manageAccess) return <ExitButton text="Salida" />;
    return <></>;
  };

  return (
    <Stack.Navigator style={{ backgroundColor: Colors.complementary }}>
      <Stack.Screen
        name="Home"
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
