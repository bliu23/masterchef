import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo.jpg'

class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<img src={logo} className="navbar-item logo left"/>
				<input className="navbar-item left" placeholder="Search" />
				<p className="navbar-item right"><Link className="navbar-link" to='/review'>Home</Link></p>
				<p className="navbar-item right"><Link className="navbar-link" to='/explore'>Explore</Link></p>
			</div>
		);
	}
}

export default Navbar;
