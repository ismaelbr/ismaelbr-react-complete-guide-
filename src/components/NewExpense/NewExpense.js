import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [editMode, setEditMode] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
    //console.log(expenseData);
    setEditMode(false)
  }

  const cancelHandler = () => {
    setEditMode(false);
  }

  const addNewExpenseHandler = () => {
    setEditMode(true);
  }

  return (
    <div className="new-expense">
      {!editMode && <button onClick={addNewExpenseHandler}>Add new Expense</button>}
      {editMode &&
       <ExpenseForm
         onSaveExpenseData={saveExpenseDataHandler}
         onCancel={cancelHandler}
       />
      }
    </div>
  );
};

export default NewExpense;
