import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { addIncome, addExpense } from "../../store/actions/actionCreators";

class Form extends Component {
  state = {
    selection: "+",
    balance: { description: "", amount: "" },
    error: ""
  };

  selectInput = React.createRef();

  componentDidMount() {
    this.selectInput.current.focus();
  }

  // Need to check if updated error message does not equal current state error message since setState is async
  componentDidUpdate(props, { error }) {
    if (this.state.error !== error && !error) {
      window.setTimeout(() => this.setState({ error: "" }), 2000);
    }
  }
  changeSelectionHandler = e => {
    this.setState({ selection: e.target.value, error: "" });
  };

  updateDescriptionHandler = e => {
    this.setState({
      error: "",
      balance: {
        ...this.state.balance,
        description: e.target.value
      }
    });
  };

  updateAmountHandler = e => {
    this.setState({
      error: "",
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
    } else if (!description && !amount) {
      this.setState({
        error: "Please enter both description and amount!"
      });
    } else if (!description && amount) {
      this.setState({ error: "Please enter a description!" });
    } else if (description && !amount) {
      this.setState({ error: "Please enter an amount!" });
    } else {
      this.setState({ error: "Please enter an amount greater than zero!" });
    }
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={e => e.preventDefault()}>
          <div className="form-row w-100">
            <div className="col-md-1">
              <select
                name="select"
                ref={this.selectInput}
                className="form-control"
                onChange={this.changeSelectionHandler}
                value={this.state.selection}
              >
                <option value="+">+</option>
                <option value="-">-</option>
              </select>
            </div>
            <div className="col-md-6">
              <input
                name="description"
                className="form-control"
                value={this.state.balance.description}
                onChange={this.updateDescriptionHandler}
                type="text"
                placeholder="Description"
              />
            </div>
            <div className="col-md-3">
              <input
                name="amount"
                className="form-control"
                value={this.state.balance.amount}
                onChange={this.updateAmountHandler}
                type="number"
                placeholder="Amount"
              />
            </div>
            <div className="col-md-2">
              <button
                name="submit"
                className="btn btn-primary w-100"
                type="submit"
                onClick={this.handleButtonSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {this.state.error && <ErrorMessage message={this.state.error} />}
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
