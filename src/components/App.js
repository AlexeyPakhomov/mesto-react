import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input
            className="popup__input popup__input_text_avatar"
            form="formAvatar"
            type="url"
            name="avatar"
            id="avatar-input"
            placeholder="Ссылка на изображение"
            required
          />
          <span className="popup__input-error avatar-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input
            className="popup__input popup__input_text_name"
            form="formUserSpecialization"
            type="text"
            name="name"
            id="name-input"
            placeholder="Имя пользователя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error name-input-error"></span>
        </div>
        <div className="popup__input-container">
          <input
            className="popup__input popup__input_text_job"
            form="formUserSpecialization"
            type="text"
            name="about"
            id="specialization-input"
            placeholder="Специализация"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error specialization-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm name="photo" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input
            className="popup__input popup__input_text_place"
            form="formPlace"
            type="text"
            name="place"
            id="place-input"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error place-input-error"></span>
        </div>
        <div className="popup__input-container">
          <input
            className="popup__input popup__input_text_url"
            form="formPlace"
            type="url"
            name="url"
            id="url-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error url-input-error"></span>
        </div>
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={selectedCard} onClose={closeAllPopups} link={selectedCard.link} name={selectedCard.name} />
    </div>
  );
}

export default App;
