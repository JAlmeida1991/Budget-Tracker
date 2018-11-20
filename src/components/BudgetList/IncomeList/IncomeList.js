import React from "react";
import { connect } from "react-redux";
import format from "date-fns/format";

import {
  removeIncome,
  removeAllIncome
} from "../../../store/actions/actionCreators";

import formatNum from "../../../util/formatNumber";

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
          className="list-group-item-primary list-group-item  d-flex justify-content-between"
          key={inc.id}
        >
          <div>
            <strong>
              <span>{inc.description}</span>
            </strong>
            <br />
            <span>${formatNum(parseFloat(inc.amount))}</span>
          </div>
          <div>
            <button
              onClick={() => props.removeIncome(inc)}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <br />
            <span className="small">
              Added on {format(inc.createdAt, "MMM Do YY hh:mm:ss")}
            </span>
          </div>
        </li>
      ))}
    </ul>
    {props.income.length === 0 && (
      <p className="text-center font-italic">No income has been recorded</p>
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
