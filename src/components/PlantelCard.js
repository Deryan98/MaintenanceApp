import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import SantaTecla from "../assets/img/SantaTecla.jpg";
import SanMiguel from "../assets/img/SanMiguel.jpg";

const HandlePress = () => {
  return Alert.alert("Seguimos Trabajando!");
};

export const PlantelCard = ({ title, image, toggleOverlay }) => (
  <View style={styles.plantelItem}>
    <TouchableOpacity onPress={toggleOverlay}>
      <ImageBackground source={SanMiguel} style={styles.bgImage}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  plantelItem: {
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
