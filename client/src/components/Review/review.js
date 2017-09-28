import React, { Component } from 'react';
import Attendees from './Attendees/attendees';
import ReviewComponent from './ReviewComponent/reviewComponent';
import { withRouter } from 'react-router';
import './review.css';

class Review extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: this.props.showDetails
		};
	}
	render() {
		console.log(this.props.show);
		const className = this.props.show ? "review" : "review hide";
		const attendees = ['Ken', 'Brandon', 'Sonya', 'Tina', 'Grace', 'Henry'];
		return (
			<div className={className}>
				<p className="title-medium">Spaghetti and Meatballs</p>
				<p className="date">09/01/17</p>
				<Attendees attendees={attendees}/>
				<ReviewComponent/>
			</div>
		);
	}
}

export default withRouter(Review);
