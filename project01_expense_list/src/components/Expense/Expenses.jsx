import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

const Expenses = props => {
    const [filterYear, setFilterYear] = useState("2022");

    const handleFilterYear = selectedYear => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => new Date(expense.date).getFullYear() === Number(filterYear));

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filterYear} onFilterYear={handleFilterYear} />
            <ExpenseChart filtered={filteredExpenses} />
            <ExpenseList filtered={filteredExpenses} />
        </Card>
    );
}

export default Expenses;