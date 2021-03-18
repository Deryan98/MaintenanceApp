import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Overlay, CheckBox, Button } from "react-native-elements";
//components
import { Title } from "./Title";
import { Clock } from "./Clock";
import { ConfirmButton } from "./Buttons";
//constants
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";

export const ConfirmAssistance = ({
  visible,
  toggleOverlay,
  titleText,
  checkText,
  buttonText,
}) => {
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
        <Title size={30}>{titleText}</Title>
        <CheckBox
          center
          title={checkText}
          checked={check}
          onPress={toggleCheckBox}
          style={styles.check}
        />
        <Clock />
        <View>
          <Text style={styles.notifyAdminText}>
            Se notificará a los administradores
          </Text>
        </View>
        <ConfirmButton buttonText={buttonText} />
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
  notifyAdminText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
