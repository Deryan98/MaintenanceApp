import React from "react";
import { StyleSheet } from "react-native";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";

export const ButtonGroup = ({ buttons, updateIndex, selectedIndex }) => (
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
);
const HeightTitleContainer = Dimensions.height * 0.07;
const styles = StyleSheet.create({
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
