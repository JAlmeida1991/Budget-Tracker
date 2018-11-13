import React from "react";
import { connect } from "react-redux";

const Budget = props => (
  <div>
    <div className="d-flex justify-content-around">
      <h2 className="bg-primary flex-grow-1 p-2 text-center m-1">
        Income:{" $"}
        {props.income.length &&
          props.income
            .map(inc => +inc.amount)
            .reduce((p, n) => p + n, 0)
            .toFixed(2)}
      </h2>
      <h2 className="bg-danger flex-grow-1 p-2 text-center m-1">
        Expense: {" $"}
        {props.expense.length &&
          props.expense
            .map(inc => +inc.amount)
            .reduce((p, n) => p + n, 0)
            .toFixed(2)}
      </h2>
    </div>

    <h2 className="bg-success flex-grow-1 p-2 text-center m-1">
      Budget: {" $"}
      {(() => {
        const incTotal =
          props.income.length &&
          props.income.map(inc => +inc.amount).reduce((p, n) => p + n, 0);

        const expTotal =
          props.expense.length &&
          props.expense.map(inc => +inc.amount).reduce((p, n) => p + n, 0);

        return incTotal - expTotal !== 0 ? (incTotal - expTotal).toFixed(2) : 0;
      })()}
    </h2>
  </div>
);

const mapStateToProps = ({ income, expense }) => ({
  income,
  expense
});

export default connect(mapStateToProps)(Budget);
