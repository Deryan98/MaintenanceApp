import React from "react";
import { ButtonGroupType } from "./ButtonGroupType";
import GridFlatList from "./GridFlatList";

export const Fragments = ({
  selectedIndex,
  triggerEvent,
  data,
  categoriesArray,
  ListHeaderComponent,
}) => {
  return (
    <>
      <GridFlatList
        selectedTypeItem={categoriesArray[selectedIndex]}
        data={data}
        triggerEvent={triggerEvent}
        ListHeaderComponent={ListHeaderComponent}
      />
    </>
  );
};
