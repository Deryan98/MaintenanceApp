import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Overlay, CheckBox, Button } from "react-native-elements";
//components
import { Title } from "./Title";
import { Clock } from "./Clock";
import { ConfirmButton, CancelButton } from "./Buttons";
//constants
import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";
//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleAccess } from "../store/actions/access";
import { toggleOverlay } from "../store/actions/overlay";
export const ConfirmDialog = ({
  visible,
  toggleInnerOverlay,
  titleText,
  checkText,
  buttonText,
  isArriving,
}) => {
  const [check, setCheck] = useState(false);
  const toggleCheckBox = () => {
    setCheck(!check);
  };

  const dispatch = useDispatch();
  const manageAccess = useSelector((state) => state.access);
  const manageOverlay = useSelector((state) => state.overlay);
  const ManageAccessHandler = () => {
    console.log(`Leo Redux acceso: ${manageAccess}`);
    console.log(`Leo Redux overlay: ${manageOverlay}`);
    dispatch(toggleAccess(manageAccess));
    if (!isArriving) dispatch(toggleOverlay(manageOverlay));
  };

  const toogleOuterOverlay = () => {
    if (!isArriving) dispatch(toggleOverlay(manageOverlay));
  };

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={isArriving ? toggleInnerOverlay : toogleOuterOverlay}
      overlayStyle={styles.overlay}
    >
      <>
        <CancelButton
          onPress={isArriving ? toggleInnerOverlay : toogleOuterOverlay}
        />
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
          <ConfirmButton
            buttonText={buttonText}
            onPress={ManageAccessHandler}
          />
        </View>
      </>
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
