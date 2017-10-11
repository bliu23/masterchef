import React, { Component } from 'react';
import './explore.css';
import Dish from './Dish/dish';

class Explore extends Component {
	render() {
		const dish1 = {
			name: "Swedish Meatball Sub"
		}
		return (
			<div className="explore">
				<p className="title-large">Explore</p>	
				<div className="dish">
					<p className="dish-element title-medium">Recipe Name</p>
					<p className="dish-element">Labels</p>
					<p className="dish-element">Notes</p>
					<p className="dish-element"><a href="#">Link</a></p>
				</div>
				{/* <Dish /> */}
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
				<div className="dish">
					<p className="dish-element title-medium">Broccoli Cheddar Soup</p>
					<p className="dish-element">Side, American, Soup </p>
					<p className="dish-element"></p>
					<p className="dish-element"><a href="#">Link</a></p>
				</div>
			</div>
		);
	}
}

export default Explore;
