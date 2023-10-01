import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023');

	const filterYear = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className='expenses'>
			<ExpenseFilter selected={filteredYear} onYearSelect={filterYear} />
			<ExpensesChart expense={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
