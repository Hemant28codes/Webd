import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing,setEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseDta) =>{
        const expenseData = {
            ...enteredExpenseDta,
            id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    const setEditingHandler = () =>{
        setEditing(true);
    };

    const stopEditingHandler = () =>{
        setEditing(false);
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={setEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
};

export default NewExpense;