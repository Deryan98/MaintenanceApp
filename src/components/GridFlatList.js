import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Card } from "./Card";
import Colors from "../constants/Colors";

export default function GridFlatList({
  data,
  selectedTypeItem,
  triggerEvent,
  ListHeaderComponent,
}) {
  //Filtering Data given a selectedType
  const filterData = () => {
    let dataToRender = [];
    data.map((item) => {
      if (item.type == selectedTypeItem) {
        dataToRender.push(item);
      }
    });
    return dataToRender;
  };
  //Card Component to be rendered into FlatList
  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      image={item.image}
      triggerEvent={triggerEvent}
      type={item.type}
    />
  );
  return (
    <FlatList
      data={filterData()}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={{ flexGrow: 1, height: "100%", backgroundColor: "transparent" }}
      horizontal={false}
      numColumns={2}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={() => {
        return <View style={styles.footer}></View>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    height: "100%",
    backgroundColor: Colors.accent,
  },
  headerComponentStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: Colors.dominant,
  },
  footer: {
    width: "100%",
    height: 75,
    backgroundColor: Colors.dominant,
  },
});
