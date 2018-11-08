import React, { Component } from "react";
import { connect } from "react-redux";

import guid from "../../util/uniqueId";
import { ADD_INCOME, ADD_EXPENSE } from "../../store/actions/actions";

class Form extends Component {
  state = {
    selection: "+",
    description: "",
    amount: ""
  };

  changeSelectionHandler = e => {
    this.setState({ selection: e.target.value });
  };

  updateDescriptionHandler = e => {
    this.setState({ description: e.target.value });
  };

  updateAmountHandler = e => {
    this.setState({ amount: e.target.value });
  };

  handleButtonSubmit = () => {
    const { description, amount } = this.state;
    if (description && amount) {
      if (this.state.selection === "+") {
        this.props.addIncome(this.state);
      } else if (this.state.selection === "-") {
        this.props.addExpense(this.state);
      }
      this.setState({ description: "", amount: "" });
    }
  };

  render() {
    return (
      <form
        className="d-flex justify-content-center"
        onSubmit={e => e.preventDefault()}
      >
        <div className="form-row w-100">
          <select
            className="form-control col-md-1 mr-1"
            onChange={this.changeSelectionHandler}
          >
            <option>+</option>
            <option>-</option>
          </select>
          <input
            className="form-control col-md-6 mr-1"
            value={this.state.description}
            onChange={this.updateDescriptionHandler}
            type="text"
            placeholder="Description"
          />
          <input
            className="form-control col-md-3 mr-1"
            value={this.state.amount}
            onChange={this.updateAmountHandler}
            type="number"
            placeholder="Amount"
          />
          <button
            className="btn btn-primary col-md-1"
            onClick={this.handleButtonSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapDisptchToProps = dispatch => ({
  addIncome: state =>
    dispatch({ type: ADD_INCOME, payload: { ...state, id: guid() } }),
  addExpense: state =>
    dispatch({ type: ADD_EXPENSE, payload: { ...state, id: guid() } })
});

export default connect(
  null,
  mapDisptchToProps
)(Form);
