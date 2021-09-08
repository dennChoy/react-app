import {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from './ExpensesChart';

import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');

  const ChangedYear = (year) => {
    setSelectedYear(year);
    //console.log(year);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
      <li>      
        <Card className="expenses">
          <ExpenseFilter year={selectedYear} onChangeYear={ChangedYear}/>
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpenseList item={filteredExpenses}/>
        </Card>
      </li>
  );
}

export default Expenses;
