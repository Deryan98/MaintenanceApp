import { TOGGLE_ACCESS } from "../actions/access";

const initialState = {
  access: true,
};

const accessReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACCESS:
      return !action.state;
    default:
      return state;
  }
};

export default accessReducer;
