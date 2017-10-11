import React, { Component } from 'react';
import '../../../appStyles/fonts.css'
import './attendees.css';

class Attendees extends Component {
	render() {
		const attendees = this.props.attendees.join(', ');
		return (
			<div className='attendees'>
				<p className='title-medium'>Attendees:</p>
				<p className>{attendees}</p>
			</div>
		);
	}
}

export default Attendees;
