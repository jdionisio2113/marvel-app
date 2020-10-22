import React, { Component } from 'react';
import truncateString from '../../utils/truncateString';
import { Link } from 'react-router-dom';

class ComicsHeader extends Component {
	render() {
		// console.log(this.props.comics);
		return (
			<div>
				<div className="thumbnail-container">
					{this.props.comics.comicData.map((res) => {
						var thumbnail = `${res.thumbnail.path}/portrait_uncanny.jpg`;
						// var x;
						// res.creators.items.map((creator) => {
						// 	// console.log(creator);
						// 	// x = creator.name;
						// });
						// console.log(x);
						console.log(res);
						return (
							<Link to={`/dashboard/comic/${res.title}`} className="comic-thumbnail-wrapper" key={res.id}>
								<img className="comic-thumbnail" src={thumbnail} />
								<h5 className="comic-title">{res.title}</h5>
								{/* <p>{x}</p> */}
							</Link>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ComicsHeader;
