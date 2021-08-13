import {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');

  const ChangedYear = (year) => {
    setSelectedYear(year);
    //console.log(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter year={selectedYear} onChangeYear={ChangedYear}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
