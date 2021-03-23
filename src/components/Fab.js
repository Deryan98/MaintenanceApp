import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import Colors from "../constants/Colors";

export const Fab = ({ onPress }) => (
  <FAB
    style={styles.fab}
    icon="location-exit"
    onPress={onPress}
    color={Colors.accent}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    backgroundColor: Colors.complementary,
    borderColor: Colors.accent,
    borderWidth: 3,
    borderRadius: 100,
    margin: 5,
    right: 0,
    bottom: 0,
  },
});
