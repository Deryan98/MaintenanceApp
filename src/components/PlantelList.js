import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { PlantelCard } from "./PlantelCard";

export default function PlantelList({ data, tipoPlantel, toggleOverlay }) {
  const renderItem = ({ item }) => (
    <PlantelCard title={item.title} toggleOverlay={toggleOverlay} />
  );

  let dataToRender = [];

  data.map((plantel) => {
    if (plantel.tipo == tipoPlantel) {
      dataToRender.push(plantel);
    }
  });

  return (
    <View>
      <FlatList
        data={dataToRender}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ flexGrow: 1, height: "70%", backgroundColor: "transparent" }}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
});