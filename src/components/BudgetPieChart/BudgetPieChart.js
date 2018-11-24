import React from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";

const BudgetPieChart = props => {
  return (
    <div className="pie-container">
      <Pie
        data={{
          labels: ["Income", "Expense"],
          datasets: [
            {
              label: "Budget",
              data: [
                props.income.length
                  ? props.income
                      .map(inc => +inc.amount)
                      .reduce((p, n) => p + n, 0)
                      .toFixed(2)
                  : 0,
                props.expense.length
                  ? props.expense
                      .map(exp => +exp.amount)
                      .reduce((p, n) => p + n, 0)
                      .toFixed(2)
                  : 0
              ],
              backgroundColor: ["#2196f3", "#ff1744"]
            }
          ]
        }}
        width={100}
        height={100}
        options={{
          title: {
            display: true,
            text: "Budget Data",
            fontSize: 18,
            fontFamily: "Helvetica"
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  income: state.income,
  expense: state.expense
});

export default connect(mapStateToProps)(BudgetPieChart);
