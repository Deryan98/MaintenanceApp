import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
//constants
import Colors from "../constants/Colors";

/**
 * Card to be rendered inside a FlatList
 * @param {string} title - Title of the card
 * @param {string} image - Image of the entity
 * @param {function} triggerEvent - Event Handler
 * @returns Card
 */
export const Card = ({ title, image, triggerEvent }) => {
  return (
    <View style={styles.cardItem}>
      <TouchableOpacity
        onPress={triggerEvent}
        style={{ backgroundColor: Colors.accent }}
        activeOpacity={0.5}
      >
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
