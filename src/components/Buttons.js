import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";

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

export const CancelButton = ({ onPress }) => {
  return (
    <View style={styles.cancelButtonContainer}>
      <TouchableOpacity style={styles.cancelButton} onPress={onPress}>
        <View
          style={{
            ...styles.cancelButtonline,
            transform: [{ rotate: "45deg" }],
          }}
        >
          <View
            style={{
              ...styles.cancelButtonline,
              transform: [{ rotate: "90deg" }],
            }}
          ></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const ExitButton = ({ text, onPress }) => {
  return (
    <Button
      title={text}
      type="outline"
      buttonStyle={{
        backgroundColor: Colors.complementary,
        borderColor: Colors.accent,
        borderRadius: 100,
        borderWidth: 3,
      }}
      containerStyle={{ marginRight: 10 }}
      titleStyle={{ color: Colors.accent, fontSize: 18 }}
      onPress={() => console.log("Se dispara un Action Redux")}
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
  cancelButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.complementary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonline: {
    width: 25,
    height: 7,
    backgroundColor: Colors.accent,
    borderRadius: 2,
  },
  cancelButtonContainer: {
    width: Dimensions.width * 0.8,
    alignItems: "flex-end",
  },
});
