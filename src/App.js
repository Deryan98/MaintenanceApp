import React, { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";

//navigation
import MainNavigator from "./navigation/MainNavigator";
import accessReducer from "./store/reducers/access";
import overlayReducer from "./store/reducers/overlay";

/**
 * memoizing navigator to avoid unnecesary re-renders
 */
const MainNavigatorMemo = memo(MainNavigator);

/**
 * We can have multiple reducers,
 * because of that you have to make a rootReducer
 * to pass it to the createStore method
 */
const rootReducer = combineReducers({
  access: accessReducer,
  overlay: overlayReducer,
});

/**
 * Creating the store that will hold
 * the states we want
 */
const store = createStore(rootReducer);

//This is to fix any performance trouble with screens
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
