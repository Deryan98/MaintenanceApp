import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
//components
import { Indication } from "../components/Indication";
import { Title } from "../components/Title";
import { ConfirmDialog } from "../components/ConfirmDialog";
import GridFlatList from "../components/GridFlatList";
//constants
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import { PlantelType, PlantelTypeArray } from "../constants/Enum";
import { ButtonGroupType } from "../components/ButtonGroupType";
//dummy
import { PLANTELES } from "../dummy/PLANTELES";

export default function AssistanceScreen() {
  //States
  /** @type {number} */
  const [selectedIndex, setSelectedIndex] = useState(0);
  /** @type {boolean} */
  const [visible, setVisible] = useState(false);
  //Utils
  /** @type {Array} */
  const buttons = [
    `Plantel ${PlantelType.FIJO}`,
    `${PlantelType.MINI} Plantel`,
    `Plantel ${PlantelType.MOVIL}`,
  ];

  //Event Handlers

  /**
   *Updates the index state of the button Group
   * @param {number} selectedIndex
   */
  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  /**
   * Event that toogles tha visible state of the
   * Overlay or Dialog
   */
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  //Utilities

  /**
   *Metrod that returns a fragment containing the
   Header of the List to make it scrollable
   *
   * @return {Component} fragment 
   */
  const ListHeaderComponent = () => {
    return (
      <>
        <Title>Control de Asistencia</Title>
        <Indication>Elija un plantel para marcar asistencia.</Indication>
        <ButtonGroupType
          buttons={buttons}
          updateIndex={updateIndex}
          selectedIndex={selectedIndex}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} barStyle="light-content" />
      <View style={styles.container}>
        <GridFlatList
          selectedTypeItem={PlantelTypeArray[selectedIndex]}
          data={PLANTELES}
          triggerEvent={toggleOverlay}
          ListHeaderComponent={ListHeaderComponent}
        />
      </View>
      <ConfirmDialog
        visible={visible}
        toggleInnerOverlay={toggleOverlay}
        titleText="Hora de llegada al Plantel"
        checkText="Primer Visita"
        buttonText="Comenzar"
        isArriving={true}
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
