import {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css'; 

const NewExpense = (props) => {
    
    const [isEditing, SetEditingFlag] = useState(false);

    const saveExpenseDataHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        SetEditingFlag(false);
    }

    const startEditingHandler = () => {
        SetEditingFlag(true);
    }

    const stopEditHandler = () => {
        SetEditingFlag(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Open and Add Nex Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditHandler}/>}
        </div>
    );

}

export default NewExpense;