import React, { Component } from 'react';
import '../../../appStyles/fonts.css'

class Attendees extends Component {
	render() {
		const attendees = this.props.attendees.join(', ');
		console.log(attendees)
		return (
			<div className='attendees'>
				<p className='title-medium'>Attendees:</p>
				<p className>{attendees}</p>
			</div>
		);
	}
}

export default Attendees;
