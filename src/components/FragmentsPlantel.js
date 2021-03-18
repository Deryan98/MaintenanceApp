import React from "react";
import { StyleSheet, View } from "react-native";
import { ButtonGroupType } from "./ButtonGroupType";
import { PlantelList } from "./PlantelList";

export const FragmentsPlantel = ({
  selectedIndex,
  updateIndex,
  buttons,
  toggleOverlay,
  data,
}) => {
  const renderFragment = (selectedIndex) => {
    switch (selectedIndex) {
      case 0:
        return (
          <PlantelList
            tipoPlantel="Fijo"
            data={data}
            toggleOverlay={toggleOverlay}
          />
        );
      case 1:
        return (
          <PlantelList
            tipoPlantel="Mini"
            data={data}
            toggleOverlay={toggleOverlay}
          />
        );
      case 2:
        return (
          <PlantelList
            tipoPlantel="Movil"
            data={data}
            toggleOverlay={toggleOverlay}
          />
        );
    }
  };
  return (
    <>
      <ButtonGroupType
        buttons={buttons}
        updateIndex={updateIndex}
        selectedIndex={selectedIndex}
      />
      {renderFragment(selectedIndex)}
    </>
  );
};
