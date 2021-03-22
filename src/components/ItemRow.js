import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
//constants
import Colors from "../constants/Colors";

export const ItemRow = ({
  id,
  title,
  image,
  failureCount,
  date,
  time,
  triggerEvent,
}) => {
  return (
    <TouchableOpacity
      onPress={triggerEvent}
      style={styles.cardItem}
      activeOpacity={0.7}
    >
      <View style={styles.leftContent}>
        <Image source={image} style={styles.avatar} />
      </View>
      <View style={styles.centerContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.idContainer}>
          <Text style={styles.id}>ID: {id}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.failureCountContainer}>
          <View style={styles.failureCountNumberContainer}>
            <Text style={styles.failureCount}>{failureCount}</Text>
          </View>
          <View style={styles.failureCountLabelContainer}>
            <Text style={styles.failureLabel}>
              {failureCount > 1 ? "fallas" : "falla"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: "row",
    backgroundColor: Colors.dominant,
    overflow: "hidden",
    width: "100%",
    height: 75,
  },

  leftContent: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  centerContent: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    borderTopWidth: 1,
  },
  titleContainer: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    color: Colors.inactive,
  },
  idContainer: { width: "100%" },
  id: { fontSize: 15, color: Colors.complementary, fontWeight: "bold" },
  dateContainer: { width: "100%" },
  date: { fontSize: 12, color: Colors.complementary, fontWeight: "bold" },
  rightContent: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    marginRight: 15,
  },
  timeContainer: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  time: { fontSize: 10, color: Colors.complementary, fontWeight: "normal" },
  failureCountContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.complementary,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  failureCountNumberContainer: {
    height: "60%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  failureCount: { fontWeight: "bold", color: Colors.accent, fontSize: 25 },
  failureCountLabelContainer: {
    height: "40%",
    width: "100%",
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  failureLabel: { fontWeight: "bold", color: Colors.accent, fontSize: 12 },
});
