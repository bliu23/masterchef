import React, { Component } from 'react';
import '../../../../appStyles/fonts.css'

class Recipe extends Component {
	render() {
		const ingredients = ['1 egg', '1 tbsp butter']
		return (
			<div>
				<p className="title-small">Recipe:</p>
				<p>Recipe goes here</p>
			</div>
		);
	}
}

export default Recipe;
