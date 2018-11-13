import React from "react";
import { connect } from "react-redux";

import { removeExpense } from "../../../store/actions/actionCreators";

const Expense = props => (
  <div className="flex-grow-1 m-1">
    <h2 className="text-center bg-danger p-2">Expense</h2>
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
            className="btn btn-sm btn-danger"
          >
            <i className="fa fa-trash" />
          </button>
        </li>
      ))}
    </ul>
    {props.expense.length === 0 && <p>No expense has been recorded</p>}
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
