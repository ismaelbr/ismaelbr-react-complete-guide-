import React, {useState} from 'react';
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({expenses}) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => (
      expense.date.getFullYear().toString() === filteredYear
    ))



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList itens={filteredExpenses}/>
        {/*{expensesContent}*/}
      </Card>
    </div>
  );
}

export default Expenses;
