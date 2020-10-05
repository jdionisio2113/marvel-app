import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}
	onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		console.log(userData);
	};
	render() {
		const { errors } = this.state;
		return (
			<div className="login-container">
				<div className="form-section">
					<Link to="/" className="back-home-btn">
						<FaArrowLeft /> Back to home
					</Link>
					<div className="login-overview">
						<h1>Login below</h1>
						<p>
							Don't have an account?{' '}
							<Link to="/register" className="login-to-register">
								Register
							</Link>
						</p>
					</div>
					<form noValidate onSubmit={this.onSubmit}>
						<div className="input-field">
							<input
								name="Email"
								placeholder="Email"
								onChange={this.onChange}
								value={this.state.email}
								error={errors.email}
								id="email"
								type="email"
							/>
						</div>
						<div className="input-field">
							<input
								name="Password"
								placeholder="Password"
								onChange={this.onChange}
								value={this.state.password}
								error={errors.password}
								id="password"
								type="password"
							/>
						</div>
						<div className="login-button">
							<button className="submit-btn" type="submit">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export default Login;
