import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
//redux
import { useSelector } from "react-redux";
//screens
import AnnounceScreen from "../screens/AnnounceScreen";
import AssistanceScreen from "../screens/AssistanceScreen";
import TopTabs from "../navigation/TopTabs";
//constants
import { ScreensEnum } from "../constants/enum/ScreensEnum";

const BottomTab = createBottomTabNavigator();
const TabBarHeight = Dimensions.height * 0.1;
const IconHeight = TabBarHeight / 2;
const LabelHeight = IconHeight / 2.5;

export const isInsideAPlantel = () => {
  const manageAccess = useSelector((state) => state.access);
  let RenderScreen;
  if (manageAccess) {
    RenderScreen = AssistanceScreen;
  } else {
    RenderScreen = TopTabs;
  }
  return RenderScreen;
};

export default function BottomTabs() {
  const { Maintenances, Dashboards } = ScreensEnum.BottomTabs;

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accent,
        inactiveTintColor: Colors.inactive,
        style: styles.style,
        labelStyle: styles.labelStyle,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          let iconType;
          if (route.name == Maintenances) {
            iconName = "cogs";
            iconType = "font-awesome";
            // iconName = "construction";
            // iconType = "material";
          } else if (route.name == Dashboards) {
            iconName = "pie-chart";
            iconType = "material";
          }
          return (
            <Icon
              name={iconName}
              type={iconType}
              color={color}
              size={IconHeight}
            />
          );
        },
      })}
    >
      <BottomTab.Screen
        name={Maintenances}
        component={isInsideAPlantel()}
        options={{
          tabBarLabel: "Mantenimientos",
        }}
      />

      <BottomTab.Screen
        name={Dashboards}
        component={AnnounceScreen}
        options={{
          tabBarLabel: "Informes",
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  style: {
    backgroundColor: Colors.complementary,
    height: TabBarHeight,
    padding: 10,
  },
  labelStyle: {
    fontSize: LabelHeight,
    marginBottom: 10,
  },
});
