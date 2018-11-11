import React from "react";

import Header from "../components/Header/Header";
import Budget from "../components/Budget/Budget";
import Form from "../components/Form/Form";
import BudgetList from "../components/BudgetList/BudgetList";
import Footer from "../components/Footer/Footer";
import BudgetPieChart from "../components/BudgetPieChart/BudgetPieChart";

const App = props => (
  <div className="container">
    <Header />
    <div className="body">
      <Budget />
      <BudgetPieChart />
      <Form />
      <BudgetList />
    </div>
    <Footer />
  </div>
);

export default App;
