import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { PlantelCard } from "./PlantelCard";

export default function PlantelList({ data, tipoPlantel }) {
  const renderItem = ({ item }) => <PlantelCard title={item.title} />;

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
        // keyExtractor={(item) => item.id}

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
