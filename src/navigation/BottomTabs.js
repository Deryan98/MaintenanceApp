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

const BottomTab = createBottomTabNavigator();
const TabBarHeight = Dimensions.height * 0.1;
const IconHeight = TabBarHeight / 2;
const LabelHeight = IconHeight / 2.5;

export const isInsideAPlantel = () => {
  const manageAccess = useSelector((state) => state.access.access);
  let RenderScreen;
  if (manageAccess) {
    RenderScreen = AssistanceScreen;
  } else {
    RenderScreen = TopTabs;
  }
  return RenderScreen;
};

export default function BottomTabs() {
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
          if (route.name == "Home") {
            iconName = "cogs";
          } else if (route.name == "User") {
            iconName = "history";
          }
          return (
            <Icon
              name={iconName}
              type="font-awesome"
              color={color}
              size={IconHeight}
            />
          );
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={isInsideAPlantel()}
        options={{
          tabBarLabel: "Mantenimientos",
        }}
      />

      <BottomTab.Screen
        name="User"
        component={AnnounceScreen}
        options={{
          tabBarLabel: "Historial",
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
