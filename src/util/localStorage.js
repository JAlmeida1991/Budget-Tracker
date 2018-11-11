export const saveStateToStorage = ({ income, expense }) => {
  try {
    const incomeJSON = JSON.stringify(income);
    const expenseJSON = JSON.stringify(expense);
    localStorage.setItem("income", incomeJSON);
    localStorage.setItem("expense", expenseJSON);
  } catch (e) {
    // Default if Browser does not support local storage... Let reducer handle state naturally
    return;
  }
};

export const loadStateFromStorage = state => {
  try {
    const expenseJSON = localStorage.getItem("expense");
    const incomeJSON = localStorage.getItem("income");
    const expense = JSON.parse(expenseJSON);
    const income = JSON.parse(incomeJSON);
    // If either expense or income does not exist, default to original reducers
    if (!expense || !income) return;
    // else return new state
    return { expense, income };
  } catch (e) {
    // Default if Browser does not support local storage... Let reducer handle state naturally
    return;
  }
};
