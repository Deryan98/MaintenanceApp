import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//screens
import PreventiveMaintenance from "../screens/PreventiveMainTenanceScreen";
import CorrectiveMaintenance from "../screens/CorrectiveMaintenanceScreen";
//components
import Colors from "../constants/Colors";

export default () => {
  const Tab = createMaterialTopTabNavigator();
  const PreventiveMaintenanceMemo = memo(PreventiveMaintenance);
  const CorrectiveMaintenanceMemo = memo(CorrectiveMaintenance);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accent,
        inactiveTintColor: Colors.inactive,
        style: styles.style,
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
        pressColor: Colors.accent,
      }}
    >
      <Tab.Screen
        name="Preventive"
        component={PreventiveMaintenanceMemo}
        options={{
          title: "Preventivo",
        }}
      />
      <Tab.Screen
        name="Corrective"
        component={CorrectiveMaintenanceMemo}
        options={{
          title: "Correctivo",
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  style: { backgroundColor: Colors.complementary },
  indicatorStyle: {
    backgroundColor: Colors.accent,
    height: 4,
    borderRadius: 10,
  },
  labelStyle: { fontWeight: "bold", fontSize: 15 },
});
