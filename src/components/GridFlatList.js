import React from "react";
import { FlatList } from "react-native";
import { Card } from "./Card";

export default function GridFlatList({ data, selectedTypeItem, triggerEvent }) {
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
      style={{ flexGrow: 1, height: "70%", backgroundColor: "transparent" }}
      horizontal={false}
      numColumns={2}
    />
  );
}