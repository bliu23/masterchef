import React, { Component } from 'react';
import Details from './details';
import '../../../appStyles/fonts.css'
import './reviewComponent.css';


class ReviewComponent extends Component {
	render() {
		const review = this.props.review;
		console.log(review);
		const details = review.details;
		console.log(details);
		return (
			<div className="review-component">
				<p className="title-medium">Review:</p>
				
				{details.map((dish, i) => <Details dish={dish} key={i} />)}

				<p>More review details will go here (hidden)</p>
				{/* All images will go separate */}
				<img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/21616304_10212648930612045_4781880486988506823_n.jpg?oh=f7343d47afc911adafc6b44f6a7eef1b&oe=5A4D14C3"/>

			</div>
		);
	}
}

export default ReviewComponent;
