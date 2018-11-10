import React from "react";
import { connect } from "react-redux";

import { removeExpense } from "../../../store/actions/actionCreators";

const Expense = props => (
  <div className="flex-grow-1">
    <h1 className="text-center">Expense</h1>
    <ul className="list-group inline-block">
      {props.expense.map(exp => (
        <li
          className="list-group-item d-flex justify-content-between"
          key={exp.id}
        >
          <span>{exp.description}</span>
          <span>{Number(exp.amount).toFixed(2)}</span>
          <button
            onClick={() => props.removeIncome(exp)}
            className="btn-small btn-danger"
          >
            <i className="fa fa-trash" />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  expense: state.expense
});

const mapDispatchToProps = dispatch => ({
  removeIncome: expense => dispatch(removeExpense(expense))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expense);
