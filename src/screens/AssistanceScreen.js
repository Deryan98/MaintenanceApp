import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Overlay } from "react-native-elements";
//components
import PlantelList from "../components/PlantelList";
import { Indication } from "../components/Indication";
import { Title } from "../components/Title";
import { ConfirmAssistance } from "../components/ConfirmAssistance";
import { ButtonGroupType } from "../components/ButtonGroupType";
// import { FragmentsPlantel } from "../components/FragmentsPlantel";
//constants
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
//dummy
import DATA from "../dummy/DATA";

export default function AssistanceScreen() {
  //States
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  //Utils
  const buttons = ["Plantel Fijo", "Mini Plantel", "Plantel Móvil"];

  //Event Handlers
  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  //Render Components
  const renderFragment = (selectedIndex) => {
    switch (selectedIndex) {
      case 0:
        return (
          <PlantelList
            tipoPlantel="Fijo"
            data={DATA}
            toggleOverlay={toggleOverlay}
          />
        );
      case 1:
        return (
          <PlantelList
            tipoPlantel="Mini"
            data={DATA}
            toggleOverlay={toggleOverlay}
          />
        );
      case 2:
        return (
          <PlantelList
            tipoPlantel="Movil"
            data={DATA}
            toggleOverlay={toggleOverlay}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} barStyle="light-content" />
      <View style={styles.container}>
        <Title>Control de Asistencia</Title>
        <Indication>Elija un plantel para marcar asistencia</Indication>
        <ButtonGroupType
          buttons={buttons}
          updateIndex={updateIndex}
          selectedIndex={selectedIndex}
        />
        {renderFragment(selectedIndex)}
      </View>
      <ConfirmAssistance
        visible={visible}
        toggleOverlay={toggleOverlay}
        titleText="Hora de llegada al Plantel"
        checkText="Primer Visita"
        buttonText="Comenzar"
      />
    </SafeAreaView>
  );
}
const WidthMainContainer = Dimensions.width;
const WidthContainers = WidthMainContainer * 0.85;

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
});
