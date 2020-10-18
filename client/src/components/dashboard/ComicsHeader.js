import React, { Component } from 'react';

class ComicsHeader extends Component {
	render() {
		console.log(this.props.comics);
		return (
			<div>
				<h1>asdf</h1>
				{this.props.comics.comicData.map((res) => {
					var thumbnail = `${res.thumbnail.path}/portrait_xlarge.jpg`;
					return (
						<div>
							<img className="comic-thumbnail" src={thumbnail} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default ComicsHeader;
