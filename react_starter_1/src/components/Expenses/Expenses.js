import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filteredYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesChart expenses={filteredYearExpenses} />
        <ExpensesList filteredYear={filteredYear} expenses={filteredYearExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
