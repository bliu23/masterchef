import React, { Component } from 'react';
import Preview from './preview';
import Details from './details';
import '../../../appStyles/fonts.css'
import './reviewComponent.css';


class ReviewComponent extends Component {
	render() {
		return (
			<div className="review-component">
				<Preview/>
				<Details/>
			</div>
		);
	}
}

export default ReviewComponent;
