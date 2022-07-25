const initialState = {};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTRY:LIST":
      return; /** Define returned state */
    default:
      return state;
  }
};
