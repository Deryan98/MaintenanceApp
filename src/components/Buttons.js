import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Colors from "../constants/Colors";

export const ConfirmButton = ({ buttonText }) => {
  return (
    <Button
      buttonStyle={styles.confirmButton}
      title={buttonText}
      titleStyle={styles.confirmButtonText}
      containerStyle={styles.confirmButtonContainer}
    />
  );
};

const styles = StyleSheet.create({
  confirmButtonContainer: {
    width: "100%",
  },
  confirmButton: {
    width: "100%",
    height: 75,
    borderRadius: 100,
    backgroundColor: Colors.complementary,
  },
  confirmButtonText: {
    color: Colors.accent,
    fontSize: 25,
  },
});
