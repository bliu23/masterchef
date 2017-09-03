import React, { Component } from 'react';
import Attendees from './Attendees/attendees';
import Recipe from './Recipe/recipe';

import './details.css';

class Details extends Component {
	render() {
		console.log(this.props.show);
		const className = this.props.show ? "details" : "details hide";
		const attendees = ['Ken', 'Brandon', 'Sonya', 'Tina', 'Grace', 'Henry'];
		return (
			<div className={className}>
				<Attendees attendees={attendees}/>
				<Recipe/>
				<p className="Review">This is where the review and stuff go</p>
			</div>
		);
	}
}

export default Details;
