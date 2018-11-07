import React from "react";
import { connect } from "react-redux";

const Budget = props => (
  <div>
    <h1>Budget Planner</h1>
    <h2>
      Income Total:
      {props.income.length &&
        props.income.map(inc => +inc.amount).reduce((p, n) => p + n, 0)}
    </h2>
    <h2>
      Expense Total:
      {props.expense.length &&
        props.expense.map(inc => +inc.amount).reduce((p, n) => p + n, 0)}
    </h2>
    <h2>
      Grand Total:
      {(() => {
        const incTotal =
          props.income.length &&
          props.income.map(inc => +inc.amount).reduce((p, n) => p + n, 0);

        const expTotal =
          props.expense.length &&
          props.expense.map(inc => +inc.amount).reduce((p, n) => p + n, 0);
        return incTotal - expTotal;
      })()}
    </h2>
  </div>
);

const mapStateToProps = ({ income, expense }) => ({
  income,
  expense
});

export default connect(mapStateToProps)(Budget);
