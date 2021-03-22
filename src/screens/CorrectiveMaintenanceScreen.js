import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
//components
import { Title } from "../components/Title";
import { Indication } from "../components/Indication";
import FailureReportList from "../components/FailureReportList";
//constants
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
//dummy
import { EQUIPMENT_FAILURE_REPORT } from "../dummy/EQUIPMENT_FAILURE_REPORT";

export default ({ navigation }) => {
  const triggerEvent = () => {
    console.log("Levanta la Pantalla Reportes");
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} barStyle="light-content" />
      <View style={styles.container}>
        <Title>Mantenimiento Correctivo</Title>
        <Indication>Realice las correcciones necesarias</Indication>
      </View>
      <View style={styles.listContainer}>
        <FailureReportList
          data={EQUIPMENT_FAILURE_REPORT}
          triggerEvent={triggerEvent}
        />
      </View>
    </SafeAreaView>
  );
};
const WidthMainContainer = Dimensions.width;
const WidthContainers = WidthMainContainer * 0.9;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.dominant,
    alignItems: "center",
    justifyContent: "flex-start",
    width: WidthMainContainer,
  },
  container: {
    width: WidthContainers,
  },
  listContainer: {
    width: WidthMainContainer,
  },
});
