import guid from "../../util/guid";
import * as actionsTypes from "./actionsTypes";

export const addIncome = state => ({
  type: actionsTypes.ADD_INCOME,
  payload: { ...state.balance, id: guid() }
});
export const addExpense = state => ({
  type: actionsTypes.ADD_EXPENSE,
  payload: { ...state.balance, id: guid() }
});

export const removeIncome = income => ({
  type: actionsTypes.REMOVE_INCOME,
  payload: income
});

export const removeExpense = expense => ({
  type: actionsTypes.REMOVE_EXPENSE,
  payload: expense
});

export const removeAllIncome = income => ({
  type: actionsTypes.REMOVE_ALL_INCOME
});

export const removeAllExpense = expense => ({
  type: actionsTypes.REMOVE_ALL_EXPENSE
});
