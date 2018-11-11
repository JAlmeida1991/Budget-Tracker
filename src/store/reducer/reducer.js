import * as actionTypes from "../actions/actions";

const initState = {
  income: [],
  expense: []
};

const rootReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_INCOME:
      return { ...state, income: state.income.concat(payload) };

    case actionTypes.ADD_EXPENSE:
      return { ...state, expense: state.expense.concat(payload) };

    case actionTypes.REMOVE_INCOME:
      return {
        ...state,
        income: state.income.filter(inc => inc.id !== payload.id)
      };

    case actionTypes.REMOVE_EXPENSE:
      return {
        ...state,
        expense: state.expense.filter(exp => exp.id !== payload.id)
      };
    default:
      return state;
  }
};

export default rootReducer;
