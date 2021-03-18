import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Overlay, CheckBox, Button } from "react-native-elements";
//components
import { Title } from "./Title";
//constants
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";

export const ConfirmAssistance = ({ visible, toggleOverlay }) => {
  const [check, setCheck] = useState(false);
  const toggleCheckBox = () => {
    setCheck(!check);
  };
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={styles.overlay}
    >
      <View style={styles.container}>
        <Title size={30}>Hora de llegada al Plantel</Title>
        <CheckBox
          center
          title="Primer Visita"
          checked={check}
          onPress={toggleCheckBox}
          style={styles.check}
        />
        <View style={styles.outSideClock}>
          <View style={styles.inSideClock}>
            <View style={styles.rectangleClock}>
              <Text style={{ ...styles.TimeClock, fontSize: 40 }}>5:00</Text>
              <Text style={{ ...styles.TimeClock, fontSize: 25 }}>a.m.</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.notifyAdminText}>
            Se notificará a los administradores
          </Text>
        </View>
        <Button
          buttonStyle={styles.confirmButton}
          title="Comenzar"
          titleStyle={styles.confirmButtonText}
          containerStyle={styles.confirmButtonContainer}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.height * 0.75,
    width: Dimensions.width * 0.8,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: Colors.dominant,
  },
  check: {
    backgroundColor: "transparent",
  },
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
  notifyAdminText: {
    fontSize: 18,
    fontWeight: "bold",
  },
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
