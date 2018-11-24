import * as actionTypes from "../actions/actionsTypes";

const initState = [];

const expenseReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_EXPENSE:
      return [...state, payload];

    case actionTypes.REMOVE_EXPENSE:
      return state.filter(exp => exp.id !== payload.id);

    case actionTypes.REMOVE_ALL_EXPENSE:
      return [];

    default:
      return state;
  }
};

export default expenseReducer;
