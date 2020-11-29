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
						// var date = comic.dates[0].date;
						// var date = new Date(comic.dates[0].date);
						// date.getDate();
						// console.log(date);
						return (
							<div className="comic-overview-container" key={comic.id}>
								<img src={thumbnail} />
								<div className="comic-overview">
									<h1>{comic.title}</h1>
									<div>
										{/* <h3>Published: {date}</h3> */}
										<div className="comic-creators-container">
											<h3>Creators:</h3>
											{comic.creators.items.map((creator) => {
												return (
													// <div className="comic-creators" key={creator.name}>
													<span>{creator.name} </span>
													// </div>
												);
											})}
										</div>
									</div>
									<p>{comic.description}</p>
								</div>
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
