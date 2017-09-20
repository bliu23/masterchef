import React, { Component } from 'react';
import Routes from './components/Routes/routes';
import './App.css';
import Navbar from './components/Navbar/navbar';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Explore from './components/Explore/explore';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar/>
				<Routes/>
			</div>
		);
	}
}

export default App;
