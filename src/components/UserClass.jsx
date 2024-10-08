import React from 'react';

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: '',
				location: '',
				login: '',
				avatar_url: '',
			},
		};
		console.log(this.props.name + ' Child Constructor');
	}

	async componentDidMount() {
		console.log(this.props.name + ' Child Component DidMount');

		//API call
		const data = await fetch('https://api.github.com/users/diliprathodrd');
		const json = await data.json();

		this.setState({ userInfo: json });
		console.log(json);
	}

	componentDidUpdate() {
		console.log('Component DidUpdate');
	}

	componentWillUnmount() {
		console.log('Component Will Unmount');
	}
	render() {
		const { name, location, login, avatar_url } = this.state.userInfo;

		console.log(this.props.name + ' Child Render');

		return (
			<div className='user-card'>
				<img src={avatar_url} alt='avatar_url' />
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: @{login}</h4>
			</div>
		);
	}
}

export default UserClass;

/**
 *
 * --- MOUNTING ---
 *
 * Constructor (default data)
 * Render (default data)
 * <HTML (Default data)>
 * ComponentDidMount
 *     <API call>
 *     <this.setState> - updates state variable
 *
 *
 * --- UPDATING ---
 *
 * Render(API data)
 * <HTML (API data)>
 * ComponentDidUpdate
 */
