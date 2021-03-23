import React, { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";

//navigation
import MainNavigator from "./navigation/MainNavigator";
import accessReducer from "./store/reducers/access";

const MainNavigatorMemo = memo(MainNavigator);

const rootReducer = combineReducers({
  access: accessReducer,
});

const store = createStore(rootReducer);

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigatorMemo />
      </NavigationContainer>
    </Provider>
  );
}
