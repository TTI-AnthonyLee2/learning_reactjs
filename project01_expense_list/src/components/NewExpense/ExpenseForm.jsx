import { useState } from "react";
import "./ExpenseForm.css";
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = props => {
    const defaultValue = {
        title: "",
        amount: 0,
        date: ""
    };

    const [userInput, setUserInput] = useState(defaultValue);

    const handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        setUserInput(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.onSaveExpense({
            ...userInput,
            id: uuidv4()
        })
        setUserInput(defaultValue);
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input required onChange={handleInputChange} value={userInput.title} type="text" name="title" placeholder="Title" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input required onChange={handleInputChange} value={userInput.amount} type="number" name="amount" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input required onChange={handleInputChange} value={userInput.date} type="date" name="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;