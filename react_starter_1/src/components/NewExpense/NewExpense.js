import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showHideAddExpenseButton, setExpenseButton] = useState(false);

  const expenseToggleHandler = () => {
    setExpenseButton(!showHideAddExpenseButton);
  };

  let showAddExpenseButton = null;

  if (showHideAddExpenseButton === false) {
    showAddExpenseButton = (
      <button onClick={expenseToggleHandler} className="expense-ui">
        {!showHideAddExpenseButton && "Add new expense"}
      </button>
    );
  }

  const saveExpenseDataHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div>
      {showAddExpenseButton}
      {showHideAddExpenseButton && (
        <div className="new-expense">
          <ExpenseForm cancelHandlerFunc={expenseToggleHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
