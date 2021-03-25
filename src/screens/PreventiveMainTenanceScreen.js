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
import { toggleOverlay } from "../store/actions/access";
//constants
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import { EquipmentTypeArray } from "../constants/Enum";
import { ScreensEnum } from "../constants/enum/ScreensEnum";
//dummy
import { EQUIPOS } from "../dummy/EQUIPOS";

export default ({ navigation }) => {
  //States
  /** @type {number} */
  const [selectedIndex, setSelectedIndex] = useState(0);
  /** @type {boolean} */
  const [visible, setVisible] = useState(false);

  const Scanner = ScreensEnum.MainNavigator.Scanner;

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
    console.log(`Soy la variable ${Scanner}`);
    navigation.navigate(Scanner);
  };

  /**
   * Event that toogles tha visible state of the
   * Overlay or Dialog
   */
  const dispatch = useDispatch();
  const manageOverlay = useSelector((state) => state.overlay);
  console.log(`Desde Preventive Screen, el overlay es: ${manageOverlay} `);

  const toggleOverlay = () => {
    dispatch(toggleOverlay(manageOverlay));
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
      {/* <Fab onPress={toggleOverlay} /> */}
      <ConfirmDialog
        visible={manageOverlay}
        toggleInnerOverlay={toggleOverlay}
        titleText="Hora de salida del Plantel"
        checkText="Ultima Visita"
        buttonText="Salida"
        isArriving={false}
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
