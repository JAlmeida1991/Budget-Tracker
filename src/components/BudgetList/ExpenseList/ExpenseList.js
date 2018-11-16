import React from "react";
import { connect } from "react-redux";

import {
  removeExpense,
  removeAllExpense
} from "../../../store/actions/actionCreators";

const Expense = props => (
  <div className="flex-grow-1">
    <h2 className="text-danger text-center">
      Expense{"  "}
      <button
        disabled={props.expense.length === 0}
        className="btn btn-outline-danger btn-sm"
        onClick={props.removeAllExpense}
      >
        Delete All
      </button>
    </h2>

    <ul className="list-group">
      {props.expense.map(exp => (
        <li
          className="list-group-item d-flex justify-content-between"
          key={exp.id}
        >
          <div>
            <strong>
              <span>{exp.description}</span>
            </strong>
            <br />
            <span>${Number(exp.amount).toFixed(2)}</span>
          </div>
          <div>
            <button
              onClick={() => props.removeIncome(exp)}
              type="button"
              class="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
    {props.expense.length === 0 && (
      <p className="text-center">No expense has been recorded</p>
    )}
  </div>
);

const mapStateToProps = state => ({
  expense: state.expense
});

const mapDispatchToProps = dispatch => ({
  removeIncome: expense => dispatch(removeExpense(expense)),
  removeAllExpense: () => dispatch(removeAllExpense())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expense);
