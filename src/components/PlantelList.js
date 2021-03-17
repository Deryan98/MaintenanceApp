import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function PlantelList({ data, tipoPlantel }) {
  const renderItem = ({ item }) => <Item title={item.title} />;

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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});
