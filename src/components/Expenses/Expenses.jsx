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

	return (
		<Card className='expenses'>
			<ExpenseFilter selected={filteredYear} onYearSelect={filterYear} />
			<ExpenseItem
				title={props.title}
				amount={props.amount}
				date={props.date}
			/>
		</Card>
	);
};

export default Expenses;
