import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComics } from '../../actions/index';
import ComicsHeader from './ComicsHeader';

class Dashboard extends Component {
	componentDidMount() {
		this.props.getComics();
	}

	render() {
		return (
			<div className="marvel-dashboard">
				<ComicsHeader comics={this.props.comics} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	comics: state.comics
});

export default connect(mapStateToProps, { getComics })(Dashboard);
