import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

/**
 * Clock to be shown in a Dialog
 * It shows the current Time.
 * @returns Clock
 */
export const Clock = () => {
  return (
    <View style={styles.outSideClock}>
      <View style={styles.inSideClock}>
        <View style={styles.rectangleClock}>
          <Text style={{ ...styles.TimeClock, fontSize: 40 }}>5:00</Text>
          <Text style={{ ...styles.TimeClock, fontSize: 25 }}>a.m.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outSideClock: {
    width: 175,
    height: 175,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.complementary,
    borderRadius: 100,
    borderColor: Colors.inactive,
    borderWidth: 5,
  },
  inSideClock: {
    width: "85%",
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.inactive,
    borderRadius: 100,
  },
  rectangleClock: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 5,
    backgroundColor: Colors.complementary,
  },
  TimeClock: {
    color: Colors.accent,
  },
});
