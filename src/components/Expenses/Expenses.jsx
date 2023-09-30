import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023');

	const filterYear = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const expenseElement = props.items.map((expense) => {
		return (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		);
	});

	return (
		<Card className='expenses'>
			<ExpenseFilter selected={filteredYear} onYearSelect={filterYear} />
			{expenseElement}
		</Card>
	);
};

export default Expenses;
