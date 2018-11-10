import React from "react";
import { connect } from "react-redux";

import { removeIncome } from "../../../store/actions/actionCreators";

const Income = props => (
  <div className="flex-grow-1">
    <h1 className="text-center">Income</h1>
    <ul className="list-group ">
      {props.income.map(inc => (
        <li
          className="list-group-item  d-flex justify-content-between"
          key={inc.id}
        >
          <span>{inc.description}</span>
          <span>{Number(inc.amount).toFixed(2)}</span>
          <button
            onClick={() => props.removeIncome(inc)}
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
  income: state.income
});

const mapDispatchToProps = dispatch => ({
  removeIncome: income => dispatch(removeIncome(income))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Income);
