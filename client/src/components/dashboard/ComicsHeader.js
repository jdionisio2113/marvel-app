import React, { Component } from 'react';
import truncateString from '../../utils/truncateString';
import { Link } from 'react-router-dom';

class ComicsHeader extends Component {
	render() {
		// console.log(this.props.comics);
		return (
			<div>
				<div className="thumbnail-container">
					{this.props.comics.comicData.map((comic) => {
						var thumbnail = `${comic.thumbnail.path}/portrait_uncanny.jpg`;

						if (thumbnail.includes('image_not_available')) {
							return null;
						}

						return (
							<Link
								to={`/dashboard/comic/${comic.title}`}
								className="comic-thumbnail-wrapper"
								key={comic.id}
							>
								<img className="comic-thumbnail" src={thumbnail} />
								<h5 className="comic-title">{comic.title}</h5>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ComicsHeader;
