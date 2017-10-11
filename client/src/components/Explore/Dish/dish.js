import React, { Component } from 'react';
import './dish.css';

class Dish extends Component {
	render() {
		const tags = this.props.dish.tags.join(', ');
		return (
			<div className="dish">
				<p className="dish-element title-medium">{this.props.dish.name}</p>
				<div className="dish-element">
					<span className="title-small ">Tags: </span>
					<span>{tags}</span>
				</div>
				<div className="dish-element">
					<span className="title-small ">Notes: </span>
					<span>{this.props.dish.notes}</span>
				</div>
				<p className="dish-element"><a href={this.props.dish.link}>Link</a></p>
			</div>
		);
	}
}

export default Dish;
