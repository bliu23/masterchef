import React, { Component } from 'react';
import './preview.css';

class Preview extends Component {
	render() {
		return (
			<div className="preview">
				<img src="http://finedininglovers.cdn.crosscast-system.com/BlogPost/xl_9101_talent-finedininglovers-TP.jpg"/>
				<p className="title-medium">Spaghetti and Meatballs</p>
				<p className="date">09/01/17</p>
			</div>
		);
	}
}

export default Preview;
