import React from "react";
import { connect } from "react-redux";

import { REMOVE_INCOME } from "../../store/actions/actions";

const Income = props => (
  <div>
    <h1>Income</h1>
    <ul>
      {props.income.map(inc => (
        <li key={inc.id}>
          <span className="mr-1">{inc.description}</span>
          <span className="mr-1">{inc.amount}</span>
          <button
            onClick={() => props.removeIncome(inc)}
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
  income: state.income
});

const mapDispatchToProps = dispatch => ({
  removeIncome: income => dispatch({ type: REMOVE_INCOME, payload: income })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Income);
