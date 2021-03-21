import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
//components
import { Indication } from "../components/Indication";
import { Title } from "../components/Title";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { Fragments } from "../components/Fragments";
//constants
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import { PlantelType, PlantelTypeArray } from "../constants/Enum";
//dummy
import { PLANTELES } from "../dummy/PLANTELES";

export default function AssistanceScreen() {
  //States
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  //Utils
  const buttons = [
    `Plantel ${PlantelType.FIJO}`,
    `${PlantelType.MINI} Plantel`,
    `Plantel ${PlantelType.MOVIL}`,
  ];

  //Event Handlers
  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} barStyle="light-content" />
      <View style={styles.container}>
        <Title>Control de Asistencia</Title>
        <Indication>Elija un plantel para marcar asistencia</Indication>
        <Fragments
          buttons={buttons}
          updateIndex={updateIndex}
          selectedIndex={selectedIndex}
          triggerEvent={toggleOverlay}
          data={PLANTELES}
          categoriesArray={PlantelTypeArray}
        />
      </View>
      <ConfirmDialog
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
