import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";

export const Indication = ({ children }) => {
  return (
    <View style={styles.indicationContainer}>
      <Text style={styles.indication}>{children}</Text>
    </View>
  );
};
const HeightTitleContainer = Dimensions.height * 0.07;
const styles = StyleSheet.create({
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
});
