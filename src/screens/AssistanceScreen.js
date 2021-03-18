import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { ButtonGroup, Overlay } from "react-native-elements";
//components
import PlantelList from "../components/PlantelList";
import { Indication } from "../components/Indication";
import { Title } from "../components/Title";
import { ConfirmAssistance } from "../components/ConfirmAssistance";
// import { ButtonGroup } from "../components/ButtonGroup";
//constants
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
//dummy
import DATA from "../dummy/DATA";

export default function AssistanceScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const buttons = ["Plantel Fijo", "Mini Plantel", "Plantel Móvil"];

  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

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
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          textStyle={styles.textButtonStyle}
          containerStyle={styles.fragmentContainer}
          innerBorderStyle={{ width: 0 }}
          buttonContainerStyle={styles.fragmentButtonContainer}
          selectedTextStyle={{ fontWeight: "bold", color: Colors.accent }}
          selectedButtonStyle={styles.fragmentSelectedButton}
        />
        {/* <ButtonGroup
            buttons={buttons}
            updateIndex={updateIndex}
            selectedIndex={selectedIndex}
          /> */}
        {renderFragment(selectedIndex)}
      </View>
      <ConfirmAssistance visible={visible} toggleOverlay={toggleOverlay} />
    </SafeAreaView>
  );
}
const WidthMainContainer = Dimensions.width;
const WidthContainers = WidthMainContainer * 0.85;
const HeightTitleContainer = Dimensions.height * 0.07;

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
  titleContainer: {
    // backgroundColor: Colors.accent,
    width: "100%",
    height: HeightTitleContainer,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "normal",
  },
  textButtonStyle: {
    color: Colors.complementary,
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center",
  },

  fragmentContainer: {
    height: HeightTitleContainer,
    borderWidth: 0,
    borderColor: Colors.complementary,
    marginVertical: 10,
    marginHorizontal: 0,
  },
  fragmentButtonContainer: {
    borderWidth: 2,
  },
  fragmentSelectedButton: {
    backgroundColor: Colors.complementary,
  },
  fragmentTextSelectedStyle: {},
});
