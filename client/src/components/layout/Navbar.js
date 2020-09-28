import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/marvel-logo.png';

class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<img className="marvel-logo" src={logo} />
				<ul className="nav-layout">
					<li>Characters</li>
					<li>Comics</li>
					<li>Movies</li>
					<li>Tv Shows</li>
					<li>Search</li>
				</ul>
			</div>
		);
	}
}
export default Navbar;
