import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import { ButtonGroup } from "react-native-elements";

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

  const renderFragment = (selectedIndex) => {
    console.log(selectedIndex);
    switch (selectedIndex) {
      case 0:
        return (
          <View>
            <Text>Planteles Fijos</Text>
          </View>
        );
      case 1:
        return (
          <View>
            <Text>Mini Planteles</Text>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>Planteles Móviles</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} barStyle="light-content" />
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
