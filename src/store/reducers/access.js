import { TOGGLE_ACCESS } from "../actions/access";

const initialState = {
  access: true,
};

const accessReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACCESS:
      console.log(`El estado de accessReducer es: ${state}`);
      console.log(`El action.access en accessReducer es:  ${action.access}`);
      return !action.access;
    default:
      return state;
  }
};

export default accessReducer;
