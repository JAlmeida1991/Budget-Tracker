import React from "react";
import { connect } from "react-redux";

import { REMOVE_EXPENSE } from "../../store/actions/actions";

const Expense = props => (
  <div>
    <h1>Expense</h1>
    <ul>
      {props.expense.map(exp => (
        <li key={exp.id}>
          <span className="mr-1">{exp.description}</span>
          <span className="mr-1">{exp.amount}</span>
          <button
            onClick={() => props.removeIncome(exp)}
            className="btn btn-primary"
          >
            Delete
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
  removeIncome: expense => dispatch({ type: REMOVE_EXPENSE, payload: expense })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expense);
