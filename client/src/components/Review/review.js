import React, { Component } from 'react';
import Details from './ReviewDetails/details';
import Preview from './ReviewPreview/preview';
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
		return (
			<div className="review">
				<Preview/>
				<Details show={this.state.showDetails}/>
			</div>
		);
	}
}

export default withRouter(Review);
