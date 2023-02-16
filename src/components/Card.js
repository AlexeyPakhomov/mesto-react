import React from "react";

function Card(props) {

	function handleClick() {
		props.onCardClick(props.card);
	}

	return (
		<li>
			<article className="elements__card">
				<div className="elements__block-pic">
					<img className="elements__pic" src={props.link} alt={props.name} onClick={handleClick} />
				</div>
				<button className="elements__recycle-bin link" type="button"></button>
				<div className="elements__caption">
					<h2 className="elements__title">
						{props.name}
					</h2>
					<div className="elements__like-container">
						<button className="elements__heart link" type="button"></button>
						<p className="elements__like-number">{props.likes.length}</p>
					</div>
				</div>
			</article>
		</li>
	)

}


export default Card;