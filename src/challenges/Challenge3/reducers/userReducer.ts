const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER:LIST":
      return; /** Define returned state */
    case "USER:UPDATE":
      return; /** Define returned state */
    default:
      return state;
  }
};
