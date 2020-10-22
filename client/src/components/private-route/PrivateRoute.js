import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../dashboard/Navbar';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<div>
		<Navbar />
		<Route
			{...rest}
			render={(props) => (auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />)}
		/>
	</div>
);

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
