import React from "react";
import { View, Text, StyleSheet } from "react-native";
//constants
import Dimensions from "../constants/Dimensions";

export const Title = ({ children, size = 25 }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={{ ...styles.title, fontSize: size }}>{children}</Text>
    </View>
  );
};

const HeightTitleContainer = Dimensions.height * 0.07;

const styles = StyleSheet.create({
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
    textAlign: "center",
  },
});
