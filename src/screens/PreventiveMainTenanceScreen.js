import React, { useState } from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
//components
import { Indication } from "../components/Indication";
import { Title } from "../components/Title";
import { Fragments } from "../components/Fragments";
//constants
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import { EquipmentTypeArray } from "../constants/Enum";
//dummy
import { EQUIPOS } from "../dummy/EQUIPOS";

export default ({ navigation }) => {
  //States
  const [selectedIndex, setSelectedIndex] = useState(0);

  //Event Handlers
  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };
  const triggerEvent = () => {
    console.log("Levanta el QR");
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} barStyle="light-content" />
      <View style={styles.container}>
        <Title>Mantenimiento Preventivo</Title>
        <Indication>Realice las inspecciones necesarias</Indication>
        <Fragments
          buttons={EquipmentTypeArray}
          updateIndex={updateIndex}
          selectedIndex={selectedIndex}
          triggerEvent={triggerEvent}
          data={EQUIPOS}
          categoriesArray={EquipmentTypeArray}
        />
      </View>
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
