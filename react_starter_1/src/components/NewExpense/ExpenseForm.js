import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredPrice: "",
  //     enteredDate: ""
  // });

  const titleChangeHandler = (event) => {
    // console.log(enteredTitle);
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });
    // setUserInput( (prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value };
    // } );
  };

  const priceChangeHandler = (event) => {
    // console.log(enteredPrice);
    setEnteredPrice(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredPrice: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    // console.log(enteredDate);
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredTitle.trim() !== "" &&
      enteredDate.trim !== ""
    ) {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredPrice,
        date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredPrice("");
      setEnteredDate("");
      props.cancelHandlerFunc();
    }
  };

  const cancelHandler = () => {
    props.cancelHandlerFunc();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            value={enteredPrice}
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2023-01-30"
            max="2026-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
