import React from "react";
import { connect } from "react-redux";

import {
  removeIncome,
  removeAllIncome
} from "../../../store/actions/actionCreators";

const Income = props => (
  <div className="flex-grow-1">
    <h2 className="text-primary text-center">
      Income{"  "}
      <button
        disabled={props.income.length === 0}
        className="btn btn-outline-primary btn-sm"
        onClick={props.removeAllIncome}
      >
        Delete All
      </button>
    </h2>

    <ul className="list-group">
      {props.income.map(inc => (
        <li
          className="list-group-item  d-flex justify-content-between"
          key={inc.id}
        >
          <div>
            <strong>
              <span>{inc.description}</span>
            </strong>
            <br />
            <span>${Number(inc.amount).toFixed(2)}</span>
          </div>
          <div>
            <button
              onClick={() => props.removeIncome(inc)}
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
    {props.income.length === 0 && (
      <p className="text-center">No income has been recorded</p>
    )}
  </div>
);

const mapStateToProps = state => ({
  income: state.income
});

const mapDispatchToProps = dispatch => ({
  removeIncome: income => dispatch(removeIncome(income)),
  removeAllIncome: () => dispatch(removeAllIncome())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Income);
