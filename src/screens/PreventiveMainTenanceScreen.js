import React, { useState } from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
//components
import { Indication } from "../components/Indication";
import { Title } from "../components/Title";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { Fab } from "../components/Fab";
import { ButtonGroupType } from "../components/ButtonGroupType";
import GridFlatList from "../components/GridFlatList";
//redux
import { useSelector, useDispatch } from "react-redux";
import { toggleAccess } from "../store/actions/access";
//constants
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import { EquipmentTypeArray } from "../constants/Enum";
//dummy
import { EQUIPOS } from "../dummy/EQUIPOS";

export default ({ navigation }) => {
  //States
  /** @type {number} */
  const [selectedIndex, setSelectedIndex] = useState(0);
  /** @type {boolean} */
  const [visible, setVisible] = useState(false);
  //Event Handlers

  /**
   *Updates the index state of the button Group
   * @param {number} selectedIndex
   */
  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  /**
   * General event that is triggered to
   * navigate to other screeen
   */
  const triggerEvent = () => {
    console.log("Levanta el QR");
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
        <Title>Mantenimiento Correctivo</Title>
        <Indication>Realice las correcciones necesarias</Indication>
        <ButtonGroupType
          buttons={EquipmentTypeArray}
          updateIndex={updateIndex}
          selectedIndex={selectedIndex}
        />
      </>
    );
  };

  const dispatch = useDispatch();
  const manageAccess = useSelector((state) => state.access.access);
  /**
   * Redux stuff
   *Method used to dispatch an action,
   In this case I toggle the state access to 
   take the user away of the plantel
   *
   */
  const manageAccessHandler = () => {
    dispatch(toggleAccess(manageAccess));
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} barStyle="light-content" />
      <View style={styles.container}>
        <GridFlatList
          selectedTypeItem={EquipmentTypeArray[selectedIndex]}
          data={EQUIPOS}
          triggerEvent={triggerEvent}
          ListHeaderComponent={ListHeaderComponent}
        />
      </View>
      <Fab onPress={toggleOverlay} />
      <ConfirmDialog
        visible={visible}
        toggleOverlay={toggleOverlay}
        titleText="Hora de salida del Plantel"
        checkText="Ultima Visita"
        buttonText="Salida"
      />
    </SafeAreaView>
  );
};

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
