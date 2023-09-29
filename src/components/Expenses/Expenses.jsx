import React from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {
	const filterYear = (selectedYear) => {
		console.log(selectedYear);
	};

	return (
		<div>
			<ExpenseFilter onYearSelect={filterYear} />
			<Card className='expenses'>
				<ExpenseItem
					title={props.title}
					amount={props.amount}
					date={props.date}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
