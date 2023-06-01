import react from "react";
import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    // const expenseDate = new Date(2021,2,20);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    // const [title,setTitle] = useState(props.title);
    // const clickHandler = () => {
    //   setTitle('Updated!');
    //   console.log('Clicked');
    // };
  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            {/* In react className is used instead of class */}
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick = {clickHandler}></button> */}
    </div>
  )
}

export default ExpenseItem;
