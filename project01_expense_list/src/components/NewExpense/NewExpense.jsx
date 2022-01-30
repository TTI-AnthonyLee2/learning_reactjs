import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = props => {
    const [isEditing, setIsEditing] = useState(false);

    const handleSaveExpense = expense => {
        props.onAddExpense(expense);
        toggleIsEditing();
    }

    const toggleIsEditing = () => {
        setIsEditing(prevValue => !prevValue);
    }

    return (
        <div className="new-expense">
            {
                isEditing ? <ExpenseForm onSaveExpense={handleSaveExpense} onCancel={toggleIsEditing} /> : <button onClick={toggleIsEditing}>Add New Expense</button>
            }
        </div>
    );
}

export default NewExpense;