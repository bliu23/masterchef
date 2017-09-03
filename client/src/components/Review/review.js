import React, { Component } from 'react';
import Details from './ReviewDetails/details';
import Preview from './ReviewPreview/preview';
import './review.css';

class Review extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: true
		};
	}
	render() {
		return (
			<div className="review">
				<Preview/>
				<Details show={this.state.showDetails}/>
			</div>
		);
	}
}

export default Review;
