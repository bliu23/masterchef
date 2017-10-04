import React, { Component } from 'react';
import '../../../appStyles/fonts.css'
import './details.css';

class Details extends Component {
	render() {
		const dish = this.props.dish;
		return (
			<div className="review-details">
				<span>{dish.name}</span><span> - {dish.description}</span>
				<br/>
				<a href={dish.link}>Recipe</a>
			</div>
		);
	}
}

export default Details;
