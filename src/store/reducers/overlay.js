import { TOGGLE_OVERLAY } from "../actions/overlay";

const initialState = {
  visible: false,
};

const overlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      console.log(`El estado de overlayReducer es: ${state}`);
      console.log(`El action.overlay en overlayReducer es: ${action.visible}`);
      return !action.visible;
    default:
      console.log(
        `Caí en el default del switch de Overlay con estado: ${state.visible}`
      );
      return state;
  }
};

export default overlayReducer;
