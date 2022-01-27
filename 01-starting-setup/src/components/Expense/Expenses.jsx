import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = props => {
    return (
        <Card className="expenses">
            {/* <div className="expenses"> */}
            {
                props.expenses.map(expense =>
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )
            }
        </Card>
        // </div>
    );
}

export default Expenses;