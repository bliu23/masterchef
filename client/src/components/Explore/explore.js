import React, { Component } from 'react';
import './explore.css';
import Dish from './Dish/dish';

class Explore extends Component {
	render() {
		// Sample Information
		// name
		// main, side, appetizer, dessert
		// notes
		// link
		const dish1 = {
			name: 'Swedish Meatball Sub',
			tags: ['Main', 'American', 'Sandwich'],
			notes: 'Don\'t forget the provolone cheese!',
			link: '#'
		};
		const dish2 = {
			name: 'Broccoli Cheddar Soup',
			tags: ['Side', 'American', 'Soup'],
			notes: '',
			link: '#'
		};

		const dishes = [dish1, dish2];
		return (
			<div className="explore">
				<p className="title-large">Explore</p>	
				<div className="dish">
					<p className="dish-element title-medium">Recipe Name</p>
					<p className="dish-element">Labels</p>
					<p className="dish-element">Notes</p>
					<p className="dish-element"><a href="#">Link</a></p>
				</div>
				{dishes.map((dish, i) => <Dish dish={dish} key={i} />)}
			</div>
		);
	}
}

export default Explore;
