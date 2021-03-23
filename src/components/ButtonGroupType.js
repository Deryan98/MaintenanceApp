import React from "react";
import { StyleSheet } from "react-native";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";
import { ButtonGroup } from "react-native-elements";

/**
 *Group of buttons that show the type of different options, you can choose only one
 * @param {Array} buttons - Holds the tests to be shown as text buttons
 * @param {function} updateIndex - Method that changes the index state
 * @param {number} selectedIndex - The index State chosen when button is pressed
 * @returns ButtonGrupType - a component with the buttons provided
 */
export const ButtonGroupType = ({ buttons, updateIndex, selectedIndex }) => {
  return (
    <ButtonGroup
      onPress={updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      textStyle={styles.textButtonStyle}
      containerStyle={styles.fragmentContainer}
      innerBorderStyle={{ width: 0 }}
      buttonContainerStyle={styles.fragmentButtonContainer}
      selectedTextStyle={styles.fragmentTextSelectedStyle}
      selectedButtonStyle={styles.fragmentSelectedButton}
    />
  );
};

const HeightTitleContainer = Dimensions.height * 0.07;
const styles = StyleSheet.create({
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
  fragmentTextSelectedStyle: { fontWeight: "bold", color: Colors.accent },
});
