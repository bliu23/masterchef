import React, { Component } from 'react';
import './attendees.css'
import '../../../../appStyles/fonts.css'

class Attendees extends Component {
	render() {
		const attendees = this.props.attendees.join(', ');
		console.log(attendees)
		return (
			<div className='attendees'>
				<p className='title-small'>Attendees:</p>
				<p className>{attendees}</p>
			</div>
		);
	}
}

export default Attendees;
