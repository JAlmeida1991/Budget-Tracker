import { combineReducers } from "redux";

import income from "./incomeReducer";
import expense from "./expenseReducer";

const rootReducer = combineReducers({ income, expense });

export default rootReducer;
