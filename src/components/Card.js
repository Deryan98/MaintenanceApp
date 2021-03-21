import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
//constants
import Colors from "../constants/Colors";

const HandlePress = () => {
  return Alert.alert("Seguimos Trabajando!");
};

export const Card = ({ title, image, triggerEvent, type }) => {
  return (
    <View style={styles.cardItem}>
      <TouchableOpacity onPress={triggerEvent}>
        <ImageBackground source={image} style={styles.bgImage}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: Colors.complementary,
    borderRadius: 15,
    overflow: "hidden",
    width: "48%",
    height: 125,
  },
  title: {
    fontSize: 15,
    color: Colors.dominant,
  },
  titleContainer: {
    backgroundColor: Colors.complementary,
    height: "30%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    justifyContent: "flex-end",
  },
});
