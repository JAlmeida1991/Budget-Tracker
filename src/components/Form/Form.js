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
      <form onSubmit={e => e.preventDefault()}>
        <select onChange={this.changeSelectionHandler}>
          <option>+</option>
          <option>-</option>
        </select>
        <input
          value={this.state.description}
          onChange={this.updateDescriptionHandler}
          type="text"
        />
        <input
          value={this.state.amount}
          onChange={this.updateAmountHandler}
          type="number"
        />
        <button onClick={this.handleButtonSubmit}>Submit</button>
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
