import React from "react";

import ExpenseList from "./ExpenseList/ExpenseList";
import IncomeList from "./IncomeList/IncomeList";

const BudgetList = props => (
  <div className="d-flex justify-content-around">
    <IncomeList />
    <ExpenseList />
  </div>
);

export default BudgetList;
