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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  //Event Handlers
  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };
  const triggerEvent = () => {
    console.log("Levanta el QR");
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

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
