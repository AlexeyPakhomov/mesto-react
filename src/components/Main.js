import React from "react";

import api from "../utils/Api";
import Card from "./Card";
import iconProfile from "../images/edit-button.svg";
import iconPhoto from "../images/add-button.svg";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getAllCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => console.log(`Ошибка получения данных: ${err}`));
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="секция-без-заголовка">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
          <button className="profile__edit-avatar" type="button" onClick={onEditAvatar}></button>
        </div>

        <article className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__specialization">{userDescription}</p>
          <button className="profile__edit-button link" type="button" onClick={onEditProfile}>
            <img className="profile__edit-button-img" src={iconProfile} alt="Кнопка редактирования профиля" />
          </button>
        </article>
        <button className="profile__add-button link" type="button" onClick={onAddPlace}>
          <img
            className="profile__add-button-img"
            src={iconPhoto}
            alt="
		Кнопка добавления контента"
          />
        </button>
      </section>

      <section className="elements" aria-label="секция-без-заголовка">
        <ul className="elements__container list">
          {cards.map((card) => {
            return <Card key={card._id} card={card} name={card.name} link={card.link} likes={card.likes} onCardClick={onCardClick} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
