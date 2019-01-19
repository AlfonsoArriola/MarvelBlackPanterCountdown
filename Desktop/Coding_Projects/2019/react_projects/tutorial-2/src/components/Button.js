import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		const{handleClick} = this.props
		return (
			<button style={{background: "red", color:"white"}} onClick={handleClick}>
				I'm lower Button
			</button>
		);
	}
}
