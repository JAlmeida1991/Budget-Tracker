import * as actionTypes from "../actions/actions";

const initState = {
  income: [],
  expense: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INCOME:
      return { ...state, income: state.income.concat(action.payload) };

    case actionTypes.ADD_EXPENSE:
      return { ...state, expense: state.expense.concat(action.payload) };

    case actionTypes.REMOVE_INCOME:
      return {
        ...state,
        income: state.income.filter(inc => inc.id !== action.payload.id)
      };

    case actionTypes.REMOVE_EXPENSE:
      return {
        ...state,
        expense: state.expense.filter(exp => exp.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default rootReducer;
