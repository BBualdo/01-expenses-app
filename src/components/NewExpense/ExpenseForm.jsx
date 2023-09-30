import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

	const inputChangeHandler = (identifier, value) => {
		if (identifier === 'title') {
			setUserInput((prevState) => {
				return {
					...prevState,
					enteredTitle: value,
				};
			});
		} else if (identifier === 'amount') {
			setUserInput((prevState) => {
				return {
					...prevState,
					enteredAmount: value,
				};
			});
		} else {
			setUserInput((prevState) => {
				return {
					...prevState,
					enteredDate: value,
				};
			});
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: userInput.enteredTitle,
			amount: userInput.enteredAmount,
			date: new Date(userInput.enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setUserInput({
			enteredTitle: '',
			enteredAmount: '',
			enteredDate: '',
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={userInput.enteredTitle}
						onChange={(event) =>
							inputChangeHandler('title', event.target.value)
						}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={userInput.enteredAmount}
						onChange={(event) =>
							inputChangeHandler('amount', event.target.value)
						}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2023-12-31'
						value={userInput.enteredDate}
						onChange={(event) => inputChangeHandler('date', event.target.value)}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
