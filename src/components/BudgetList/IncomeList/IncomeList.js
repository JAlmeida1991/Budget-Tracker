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
        className="btn btn-primary btn-sm"
        onClick={props.removeAllIncome}
      >
        Delete All
      </button>
    </h2>

    <ul className="list-group ">
      {props.income.map(inc => (
        <li
          className="list-group-item  d-flex justify-content-between"
          key={inc.id}
        >
          <span>{inc.description}</span>
          <span>${Number(inc.amount).toFixed(2)}</span>
          <button
            onClick={() => props.removeIncome(inc)}
            className="btn btn-sm btn-danger"
          >
            <i className="fa fa-trash" />
          </button>
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
