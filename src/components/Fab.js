import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import Colors from "../constants/Colors";

export const Fab = () => (
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log("Pressed")}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    color: Colors.accent,
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
