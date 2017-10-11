import React, { Component } from 'react';
import './dish.css';

class Dish extends Component {
	render() {
		return (
			<div className="dish">
				<p className="dish-element title-medium">Swedish Meatball Sub</p>
				<div className="dish-element">
					<span className="title-small ">Tags: </span>
					<span>Main, American, Sandwich</span>
				</div>
				<div className="dish-element">
					<span className="title-small ">Notes: </span>
					<span>Don't forget the provolone cheese!</span>
				</div>
				<p className="dish-element"><a href="#">Link</a></p>
			</div>
		);
	}
}

export default Dish;
