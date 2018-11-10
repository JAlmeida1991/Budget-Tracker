import guid from "../../util/guid";
import * as actions from "./actions";

export const addIncome = state => ({
  type: actions.ADD_INCOME,
  payload: { ...state.balance, id: guid() }
});
export const addExpense = state => ({
  type: actions.ADD_EXPENSE,
  payload: { ...state.balance, id: guid() }
});

export const removeIncome = income => ({
  type: actions.REMOVE_INCOME,
  payload: income
});

export const removeExpense = expense => ({
  type: actions.REMOVE_EXPENSE,
  payload: expense
});
