import React from "react";

import api from "../utils/Api";
import Card from "./Card";

function Main(props) {

	const [userName,setUserName] = React.useState('');
	const [userDescription,setUserDescription] = React.useState('');
	const [userAvatar,setUserAvatar] = React.useState('');
	const [cards,setCards] = React.useState([]);

	React.useEffect(() => {
		Promise.all([api.getUserInfo(),api.getAllCards()])
			.then(([userData,cardsData]) => {
				setUserName(userData.name);
				setUserDescription(userData.about);
				setUserAvatar(userData.avatar);
				setCards(cardsData);
			})
			.catch((err) => console.log(`Ошибка получения данных: ${err}`));
	},[]
	);

	return (
		<main className="content">
			<section className="profile" aria-label="секция-без-заголовка">
				<div className="profile__avatar-container">
					<img className="profile__avatar" src={userAvatar} alt="Аватарка" />
					<button className="profile__edit-avatar" type="button" onClick={props.onEditAvatar}></button>
				</div>

				<article className="profile__info">
					<h1 className="profile__name">{userName}</h1>
					<p className="profile__specialization">{userDescription}</p>
					<button className="profile__edit-button link" type="button" onClick={props.onEditProfile}>
						<img className="profile__edit-button-img" src='/images/edit-button.svg'
							alt="Кнопка редактирования профиля" />
					</button>
				</article>
				<button className="profile__add-button link" type="button" onClick={props.onAddPlace}>
					<img className="profile__add-button-img" src='/images/add-button.svg' alt="
		Кнопка добавления контента"/>
				</button>
			</section>

			<section className="elements" aria-label="секция-без-заголовка">
				<ul className="elements__container list">
					{cards.map((card,i) => {
						return <Card
							key={i}
							card={card}
							name={card.name}
							link={card.link}
							likes={card.likes}
							onCardClick={props.onCardClick}
						/>
					})}
				</ul>
			</section>
		</main>
	)
}

export default Main;