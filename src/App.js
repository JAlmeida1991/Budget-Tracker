import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Budget from "./components/Budget/Budget";
import Form from "./components/Form/Form";
import Income from "./components/Income/Income";
import Expense from "./components/Expense/Expense";
import Footer from "./components/Footer/Footer";

// import Decrease from "./components/Decrease";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Budget />
        <Form />
        <Income />
        <Expense />
        <Footer />
      </div>
    );
  }
}
export default App;
