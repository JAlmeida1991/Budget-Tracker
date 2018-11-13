import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { addIncome, addExpense } from "../../store/actions/actionCreators";

class Form extends Component {
  state = {
    selection: "+",
    balance: { description: "", amount: "" },
    error: false
  };

  selectInput = React.createRef();

  changeSelectionHandler = e => {
    this.setState({ selection: e.target.value, error: false });
  };

  updateDescriptionHandler = e => {
    this.setState({
      error: false,
      balance: {
        ...this.state.balance,
        description: e.target.value
      }
    });
  };

  updateAmountHandler = e => {
    this.setState({
      error: false,
      balance: {
        ...this.state.balance,
        amount: e.target.value
      }
    });
  };

  handleButtonSubmit = () => {
    const { description, amount } = this.state.balance;
    if (description && amount > 0) {
      if (this.state.selection === "+") {
        this.props.addIncome(this.state);
        this.selectInput.current.focus();
      } else {
        this.props.addExpense(this.state);
        this.selectInput.current.focus();
      }

      this.setState({
        balance: {
          description: "",
          amount: ""
        }
      });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={e => e.preventDefault()}>
          <div className="form-row w-100">
            <div className="col-md-1">
              <select
                ref={this.selectInput}
                className="form-control "
                onChange={this.changeSelectionHandler}
              >
                <option>+</option>
                <option>-</option>
              </select>
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                value={this.state.balance.description}
                onChange={this.updateDescriptionHandler}
                type="text"
                placeholder="Description"
              />
            </div>
            <div className="col-md-3">
              <input
                className="form-control"
                value={this.state.balance.amount}
                onChange={this.updateAmountHandler}
                type="number"
                placeholder="Amount"
              />
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-primary w-100"
                type="submit"
                onClick={this.handleButtonSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {this.state.error && <ErrorMessage />}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addIncome: state => dispatch(addIncome(state)),
  addExpense: state => dispatch(addExpense(state))
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
