import React from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
	return (
		<div className='expenses'>
			<ExpenseItem
				title={props.title}
				amount={props.amount}
				date={props.date}
			/>
		</div>
	);
};

export default Expenses;
