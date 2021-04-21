import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({expenses}) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const changeFilterHandler = (newFilteredYear) => {
    console.log(newFilteredYear);
    setFilteredYear(newFilteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
        {
          expenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
          ))
        }
        {/*<ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>*/}
        {/*<ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>*/}
        {/*<ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>*/}
        {/*<ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>*/}
      </Card>
    </div>
  );
}

export default Expenses;
