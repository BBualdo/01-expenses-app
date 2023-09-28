import React from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

const Expenses = (props) => {
	return (
		<Card className='expenses'>
			<ExpenseItem
				title={props.title}
				amount={props.amount}
				date={props.date}
			/>
		</Card>
	);
};

export default Expenses;
