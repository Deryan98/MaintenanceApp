import React from "react";
import { ButtonGroupType } from "./ButtonGroupType";
import GridFlatList from "./GridFlatList";

export const Fragments = ({
  selectedIndex,
  updateIndex,
  buttons,
  triggerEvent,
  data,
  categoriesArray,
}) => {
  return (
    <>
      <ButtonGroupType
        buttons={buttons}
        updateIndex={updateIndex}
        selectedIndex={selectedIndex}
      />
      <GridFlatList
        selectedTypeItem={categoriesArray[selectedIndex]}
        data={data}
        triggerEvent={triggerEvent}
      />
    </>
  );
};
