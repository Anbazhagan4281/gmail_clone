// Define action types
export const OPEN_COMPOSE = "OPEN_COMPOSE";
export const CLOSE_COMPOSE = "CLOSE_COMPOSE";

export const intailState = {
  isOpen: false
}
// Reducer function
const composeReducer = (state, action) => {
  switch (action.type) {
    case OPEN_COMPOSE:
      return { ...state, isOpen: true };
    case CLOSE_COMPOSE:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};


export default composeReducer;
