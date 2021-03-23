import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
//constants
import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import { ItemRow } from "./ItemRow";

export default ({ data, triggerEvent, ListHeaderComponent }) => {
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
      style={styles.flatList}
      ListHeaderComponent={ListHeaderComponent}
      ListHeaderComponentStyle={styles.headerComponentStyle}
      ListFooterComponent={() => {
        return <View style={styles.footer}></View>;
      }}
    />
  );
};

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
