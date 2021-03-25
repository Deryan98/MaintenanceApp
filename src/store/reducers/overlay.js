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
      return state;
  }
};

export default overlayReducer;
