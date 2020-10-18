import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { getComics } from '../../actions/index';
import ComicsHeader from './ComicsHeader';

class Dashboard extends Component {
	componentDidMount() {
		this.props.getComics();
	}

	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	};
	render() {
		const { user } = this.props.auth;
		// const { comics } = this.props.comics;
		return (
			<div className="marvel-dashboard">
				<h1>Marvel Dashboard</h1>
				<h4>Hey there, {user.name}</h4>
				<button onClick={this.onLogoutClick}>Logout</button>
				<ComicsHeader comics={this.props.comics} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	comics: state.comics
});

export default connect(mapStateToProps, { logoutUser, getComics })(Dashboard);
