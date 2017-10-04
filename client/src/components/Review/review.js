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
		const className = this.props.show ? "review" : "review hide";
		const attendees = ['Tina', 'Vicky', 'Ken', 'Gary the snail'];
		
		const dish1 = {
			name: 'Roast Chicken',
			description: 'Super simple with just salt, pepper, type, but so DELSIH',
			link: 'https://www.epicurious.com/recipes/food/views/my-favorite-simple-roast-chicken-231348/amp'
		};

		const dish2 = {
			name: 'Sample name',
			description: 'Sample description',
			link: 'https://github.com/'
		};
		const review = {
			details: [
				dish1,
				dish2
			],
			mainImageSrc: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/21616304_10212648930612045_4781880486988506823_n.jpg?oh=f7343d47afc911adafc6b44f6a7eef1b&oe=5A4D14C3",

		}
		return (
			<div className={className}>
				<p className="title-large">Roast Chicken and Co.</p>
				<p className="date">09/18/17</p>
				<Attendees attendees={attendees}/>
				<ReviewComponent review={review}/>
			</div>
		);
	}
}

export default withRouter(Review);
