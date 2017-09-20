import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="navbar">
					<h1 className="navbar-item">Logo</h1>
					<input className="navbar-item" placeholder="Search" />
					<p className="navbar-item"><a href="/review">Home</a></p>
					<p className="navbar-item"><a href="/explore">Explore</a></p>
					{/* <p className="navbar-item"><Link to='/review'>Home</Link></p>
					<p className="navbar-item"><Link to='/explore'>Explore</Link></p> */}
				</div>
			</div>
		);
	}
}

export default Navbar;
