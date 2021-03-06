import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import marvel_backdrop from '../../images/marvel-backdrop.jpg';
import marvel_logo from '../../images/marvel-logo.png';
import captain_america from '../../images/captain_america.jpg';
import hulk from '../../images/hulk.jpg';

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="landing-navbar">
					<img className="marvel-logo" src={marvel_logo} />
					<div className="login-container">
						<Link to="/login" className="login-link">
							Login
						</Link>
					</div>
				</div>
				<div className="backdrop_container">
					<img className="marvel-backdrop" src={marvel_backdrop} />
					<div className="sign-in-container">
						<h1>
							Read these plus 27,000+ digital comics. Here’s how to stay connected with your favorite
							super heroes.
						</h1>
						<span>Read anywhere. Read anytime.</span>
						<div className="register-link-container">
							<Link className="register-link" to="/register">
								Register
							</Link>
						</div>
					</div>
				</div>
				<div className="about_section">
					<img className="captain_america" src={captain_america} />
					<div className="about_overview">
						<h3>Read anywhere</h3>
						<p>
							Read unlimited comics and learn about your favorite heroes on your phone, tablet, and laptop
						</p>
					</div>
				</div>
				<div className="about_section">
					<div className="about_overview">
						<img className="hulk-mobile" src={hulk} />
						<h3>Read anywhere</h3>
						<p>
							Read unlimited comics and learn about your favorite heroes on your phone, tablet, and laptop
						</p>
					</div>
					<img className="hulk" src={hulk} />
				</div>
			</div>
		);
	}
}
export default Landing;
