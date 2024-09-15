import React, { useState } from 'react';

const User = ({ name }) => {
	const [count] = useState(0);
	const [count2] = useState(1);
	return (
		<div className='user-card'>
			<h1>Count 1: {count}</h1>
			<h1>Count 2: {count2}</h1>
			<h2>Name: {name}</h2>
			<h3>Location: Pune</h3>
			<h4>Contact: @diliprathod2327</h4>
		</div>
	);
};

export default User;
