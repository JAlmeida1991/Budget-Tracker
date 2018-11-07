import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Budget from "./components/Budget/Budget";
import Form from "./components/Form/Form";
import BudgetList from "./components/BudgetList/BudgetList";
import Footer from "./components/Footer/Footer";
import BudgetPieChart from "./components/BudgetPieChart/BudgetPieChart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Budget />
        <BudgetPieChart />
        <Form />
        <BudgetList />
        <Footer />
      </div>
    );
  }
}
export default App;
