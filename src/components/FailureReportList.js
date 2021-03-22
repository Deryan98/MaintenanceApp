import React from "react";
import { FlatList } from "react-native";
import Colors from "../constants/Colors";
import { ItemRow } from "./ItemRow";

export default ({ data, triggerEvent }) => {
  const renderItem = ({ item }) => {
    return (
      <ItemRow
        id={item.id}
        title={item.title}
        image={item.image}
        failureCount={item.failureCount}
        date={item.date}
        time={item.time}
        triggerEvent={triggerEvent}
      />
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={{
        height: "80%",
        backgroundColor: Colors.accent,
        marginVertical: 3,
      }}
    />
  );
};
