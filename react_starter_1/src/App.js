import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Apply for Passport",
    amount: 150,
    date: new Date(2023, 1, 24),
  },
  {
    id: "e2",
    title: "Buy Sneakers",
    amount: 15000,
    date: new Date(2023, 1, 27),
  },
  {
    id: "e3",
    title: "Learn Machine Learning",
    amount: 20000,
    date: new Date(2023, 7, 30),
  },
  { id: "e4", title: "Freelancing", amount: 5000, date: new Date(2023, 2, 1) },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => { return [expense, ...prevExpenses] });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
