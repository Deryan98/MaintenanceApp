import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";

//screens
import HomeScreen from "../screens/HomeScreen";

export default function BottomTabs() {
  const BottomTab = createBottomTabNavigator();
  const TabBarHeight = Dimensions.height * 0.1;
  const IconHeight = TabBarHeight / 2;
  const LabelHeight = IconHeight / 2.5;

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accent,
        inactiveTintColor: Colors.inactive,
        style: {
          backgroundColor: Colors.complementary,
          height: TabBarHeight,
          padding: 10,
        },
        labelStyle: {
          fontSize: LabelHeight,
          marginBottom: 10,
        },
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
        component={HomeScreen}
        options={{
          tabBarLabel: "Mantenimientos",
        }}
      />
      <BottomTab.Screen
        name="User"
        component={HomeScreen}
        options={{
          tabBarLabel: "Historial",
        }}
      />
    </BottomTab.Navigator>
  );
}
