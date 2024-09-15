import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
	constructor(props) {
		super(props);
		// console.log('Parent Constructor');
	}

	componentDidMount() {
		// console.log('Parent Component DidMount');
	}
	render() {
		// console.log('Parent Render');

		return (
			<div>
				<h1>About Class Component</h1>
				<h3>This is Namaste Food</h3>
				<UserClass name={'Dilip Rathod'} location={'Pune'} contact={'@diliprathod2327'} />
			</div>
		);
	}
}

/**
 * - Parent Constructor
 * - Parent Render
 *
 * 	- First Child Constructor
 *  - First Child Render
 *
 *  - Second Child Constructor
 *  - Second Child Render
 *
 *  <DOM UPDATED - IN SINGLE BATCH>
 *  - First Child componentDidMount
 *  - Second Child componentDidMount
 *
 * - Parent componentDidMount
 */

export default About;
