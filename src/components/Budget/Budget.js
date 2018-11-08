import React from "react";
import { connect } from "react-redux";

const Budget = props => (
  <div className="d-flex justify-content-around">
    <h2 className="bg-primary flex-grow-1 p-2 text-center">
      Income Total:
      {props.income.length &&
        props.income.map(inc => +inc.amount).reduce((p, n) => p + n, 0)}
    </h2>
    <h2 className="bg-danger flex-grow-1 p-2 text-center">
      Expense Total:
      {props.expense.length &&
        props.expense.map(inc => +inc.amount).reduce((p, n) => p + n, 0)}
    </h2>
    <h2 className="bg-success flex-grow-1 p-2 text-center">
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
