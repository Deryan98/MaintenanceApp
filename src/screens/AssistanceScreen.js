import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import { ButtonGroup } from "react-native-elements";
import PlantelList from "../components/PlantelList";

export default function AssistanceScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const component1 = () => <Text>Plantel Fijo</Text>;
  const component2 = () => <Text>Mini Plantel</Text>;
  const component3 = () => <Text>Plantel Móvil</Text>;
  const buttons = [
    { element: component1 },
    { element: component2 },
    { element: component3 },
  ];

  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  const DATA = [
    {
      id: "plantel1",
      title: "KSA1 San Andrés",
      image: "string1",
      tipo: "Fijo",
    },
    {
      id: "plantel2",
      title: "KST1 Santa Tecla",
      image: "string2",
      tipo: "Fijo",
    },
    {
      id: "plantel3",
      title: "KSM1 San Miguel",
      image: "string3",
      tipo: "Fijo",
    },
    {
      id: "plantel4",
      title: "Plantel Sonsonate",
      image: "string1",
      tipo: "Mini",
    },
    {
      id: "plantel5",
      title: "Plantel La Paz",
      image: "string2",
      tipo: "Mini",
    },
    {
      id: "plantel6",
      title: "Plantel Apopa",
      image: "string3",
      tipo: "Mini",
    },
    {
      id: "plantel7",
      title: "Plantel Santa Ana",
      image: "string3",
      tipo: "Mini",
    },
    {
      id: "plantel8",
      title: "Plantel Santa Rosa de Lima",
      image: "string3",
      tipo: "Mini",
    },
    {
      id: "plantel9",
      title: "KM25",
      image: "string1",
      tipo: "Movil",
    },
    {
      id: "plantel10",
      title: "KM26",
      image: "string2",
      tipo: "Movil",
    },
    {
      id: "plantel11",
      title: "KM27",
      image: "string3",
      tipo: "Movil",
    },
    {
      id: "plantel12",
      title: "KM28",
      image: "string3",
      tipo: "Movil",
    },
    {
      id: "plantel13",
      title: "KM29",
      image: "string3",
      tipo: "Movil",
    },
    {
      id: "plantel14",
      title: "KM35",
      image: "string3",
      tipo: "Movil",
    },
  ];

  const renderFragment = (selectedIndex) => {
    switch (selectedIndex) {
      case 0:
        return <PlantelList tipoPlantel="Fijo" data={DATA} />;
      case 1:
        return <PlantelList tipoPlantel="Mini" data={DATA} />;
      case 2:
        return <PlantelList tipoPlantel="Movil" data={DATA} />;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} barStyle="light-content" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Control de Asistencia</Text>
          </View>
          <View style={styles.indicationContainer}>
            <Text style={styles.indication}>
              Elija un plantel para marcar asistencia
            </Text>
          </View>

          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.fragmentContainer}
            innerBorderStyle={{ width: 0 }}
            buttonContainerStyle={styles.fragmentButtonContainer}
            selectedTextStyle={{ color: Colors.accent }}
            selectedButtonStyle={styles.fragmentSelectedButton}
          />
          {renderFragment(selectedIndex)}
        </View>
      </ScrollView>
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
  indicationContainer: {
    height: HeightTitleContainer,
    backgroundColor: Colors.inactive,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  indication: {
    color: Colors.dominant,
    fontSize: 18,
    fontWeight: "normal",
  },
  fragmentContainer: {
    height: HeightTitleContainer,
    borderColor: Colors.complementary,
    marginVertical: 10,
  },
  fragmentButtonContainer: {
    borderWidth: 2,
  },
  fragmentSelectedButton: {
    backgroundColor: Colors.accent,
  },
  fragmentTextSelectedStyle: {},
});
