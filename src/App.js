import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dimensions from "./constants/Dimensions";
import Colors from "./constants/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>App de Mantenimiento</Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>
            Esta aplicación es un proyecto de Innovación empresarial
          </Text>
        </View>
        <View style={styles.announcementContainer}>
          <Text style={styles.announcement}>Espérala Pronto!</Text>
        </View>
      </View>
      <StatusBar style={styles.statusBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dominant,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: Colors.complementary,
    height: Dimensions.height / 3,
    width: Dimensions.width / 1.2,
    borderRadius: 15,
  },
  title: {
    color: Colors.dominant,
    fontSize: 30,
  },
  titleContainer: {
    backgroundColor: Colors.complementary,
    borderWidth: 5,
    borderColor: Colors.complementary,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
  },
  paragraphContainer: {
    height: "50%",
    width: "100%",
    borderRadius: 15,
    borderColor: Colors.complementary,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: { color: Colors.inactive, fontSize: 18, textAlign: "center" },
  announcementContainer: {
    height: "20%",
    flexDirection: "column",
  },
  announcement: {
    color: Colors.accent,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
