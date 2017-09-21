import React, { Component } from 'react';
import Review from './../Review/review';
import Navbar from './../Navbar/navbar';
import NotFound from './../NotFound/notfound';
import App from '../../App';
import {
	Switch, 
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Explore from './../Explore/explore';


class Routes extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path='/' component={NotFound} />
					<Route path='/review' component={() => (<Review showDetails={true} />)} />
					<Route path='/explore' component={Explore} />
				</Switch>

				{/* <Router>
					<div>
						<Route exact path='/' component={NotFound} />
						<Route path='/review' component={() => (<Review showDetails={true} />)} />
						<Route path='/explore' component={Explore} />
					</div>
				</Router> */}

			</div>
		);
	}
}

export default Routes;
