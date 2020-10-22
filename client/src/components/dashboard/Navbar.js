import React, { Component } from 'react';
import logo from '../../images/marvel-logo.png';
import { logoutUser } from '../../actions/authActions';
import { connect } from 'react-redux';

class Navbar extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	};

	render() {
		const { user } = this.props.auth;
		return (
			<div className="dashboard-navbar">
				<img className="marvel-logo" src={logo} />
				{/* <ul className="nav-layout">
					<li>Characters</li>
					<li>Comics</li>
					<li>Search</li>
					<li> */}
				<div className="navbar-overview">
					<h4>Hey there, {user.name}</h4>
					<button onClick={this.onLogoutClick} className="logout-link">
						Logout
					</button>
				</div>
				{/* </li>
				</ul> */}
				{/* <button onClick={this.onLogoutClick}>Logout</button> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
