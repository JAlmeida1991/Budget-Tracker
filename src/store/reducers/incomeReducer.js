import * as actionTypes from "../actions/actionsTypes";

const initState = [];

const incomeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_INCOME:
      return [...state, payload];

    case actionTypes.REMOVE_INCOME:
      return state.filter(inc => inc.id !== payload.id);

    case actionTypes.REMOVE_ALL_INCOME:
      return [];

    default:
      return state;
  }
};

export default incomeReducer;
