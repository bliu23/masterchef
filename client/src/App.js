import React, { Component } from 'react';
import Review from './components/Review/review';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Review/>
			</div>
		);
	}
}

export default App;
