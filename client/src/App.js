import React, { Component } from 'react';
import Review from './components/Review/review';
import Navbar from './components/Navbar/navbar';
import './App.css';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Explore from './components/Explore/explore';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Router>
					<div>
						<Route path='/explore' component={Explore} />
						<Route path='/review' component={() => (<Review showDetails={false} />)} />
					</div>
				</Router>

			</div>
		);
	}
}

export default App;
