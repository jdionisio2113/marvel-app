import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {}
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};
		console.log(newUser);
		this.props.registerUser(newUser, this.props.history);
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="register-container">
				<div className="form-section">
					<Link to="/" className="back-home-btn">
						<FaArrowLeft /> Back to home
					</Link>
					<div className="register-overview">
						<h1>Register below</h1>
						<p>
							Already have an account?{' '}
							<Link to="/login" className="register-to-login">
								Login
							</Link>
						</p>

						<form noValidate onSubmit={this.onSubmit}>
							<div className="input-field">
								<input
									name="Name"
									placeholder="Name"
									onChange={this.onChange}
									value={this.state.name}
									error={errors.name}
									id="name"
									type="text"
								/>
							</div>
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
									name="Add a password"
									placeholder="Add a password"
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id="password"
									type="password"
								/>
							</div>
							<div className="input-field">
								<input
									name="Confirm password"
									placeholder="Confirm password"
									onChange={this.onChange}
									value={this.state.password2}
									error={errors.password2}
									id="password2"
									type="password"
								/>
							</div>
							<div className="sign-up-button">
								<button type="submit" className="submit-btn">
									Sign up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

function mapStateToProps(state) {
	return {
		auth: state.auth,
		errors: state.errors
	};
}
