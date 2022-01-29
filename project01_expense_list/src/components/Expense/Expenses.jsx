import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = props => {
    const [filterYear, setFilterYear] = useState("2022");

    const handleFilterYear = selectedYear => {
        setFilterYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filterYear} onFilterYear={handleFilterYear} />
            {
                props.expenses
                    .filter(expense => new Date(expense.date).getFullYear() === Number(filterYear))
                    .map(expense =>
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                    )
            }
        </Card>
    );
}

export default Expenses;