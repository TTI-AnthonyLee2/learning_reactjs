import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
    const handleSaveExpense = expense => {
        props.onAddExpense(expense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={handleSaveExpense} index={props.index} />
        </div>
    );
}

export default NewExpense;