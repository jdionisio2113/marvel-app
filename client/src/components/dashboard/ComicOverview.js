import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getComics } from '../../actions/index';

class ComicOverview extends Component {
	constructor(props) {
		super(props);

		this.mainComic = this.mainComic.bind(this);
	}

	componentDidMount() {
		this.props.getComics();
	}

	mainComic() {
		var { comics } = this.props;
		var currentPath = window.location.pathname;
		var directories = currentPath.split('/');
		var lastDirectory = directories[directories.length - 1];
		var location = window.location.hash.replace('%20', ' ');
		var decodedComicName = decodeURIComponent(lastDirectory) + location;

		return (
			<div>
				{comics.comicData.map((comic) => {
					// console.log(comic);
					var thumbnail = `${comic.thumbnail.path}/portrait_uncanny.jpg`;

					if (comic.thumbnail.path.includes('image_not_available')) {
						return null;
					}

					if (comic.title === decodedComicName) {
						console.log(comic);
						return (
							<div>
								<img src={thumbnail} />
								<h1>{comic.title}</h1>
								<p>{comic.description}</p>
							</div>
						);
					}
				})}
			</div>
		);
	}

	render() {
		return <div>{this.mainComic()}</div>;
	}
}

const mapStateToProps = (state) => ({
	comics: state.comics
});

export default connect(mapStateToProps, { getComics })(ComicOverview);
