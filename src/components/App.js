import React from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

	const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen,setIsAddPlacePopupOpen] = React.useState(false);
	const [selectedCard,setSelectedCard] = React.useState(false);

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
		setSelectedCard(false);
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
			<PopupWithForm
				name='avatar'
				title='Обновить аватар'
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
			>
				<div className="popup__input-container">
					<input className="popup__input popup__input_text_avatar" form="formAvatar" type="url" name="avatar"
						id="avatar-input" placeholder="Ссылка на изображение" required />
					<span className="popup__input-error avatar-input-error"></span>
				</div>
				<button className="popup__button popup__button_disabled link" type="submit" form="formAvatar">Сохранить</button>
			</PopupWithForm>

			<PopupWithForm
				name='profile'
				title='Редактировать профиль'
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
			>
				<div className="popup__input-container">
					<input className="popup__input popup__input_text_name" form="formUserSpecialization" type="text" name="name"
						id="name-input" placeholder="Имя пользователя" minLength="2" maxLength="40" required />
					<span className="popup__input-error name-input-error"></span>
				</div>
				<div className="popup__input-container">
					<input className="popup__input popup__input_text_job" form="formUserSpecialization" type="text" name="about"
						id="specialization-input" placeholder="Специализация" minLength="2" maxLength="200" required />
					<span className="popup__input-error specialization-input-error"></span>
				</div>
				<button className="popup__button popup__button_disabled link" type="submit"
					form="formUserSpecialization">Сохранить</button>
			</PopupWithForm>

			<PopupWithForm
				name='photo'
				title='Новое место'
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
			>
				<div className="popup__input-container">
					<input className="popup__input popup__input_text_place" form="formPlace" type="text" name="place"
						id="place-input" placeholder="Название" minLength="2" maxLength="30" required />
					<span className="popup__input-error place-input-error"></span>
				</div>
				<div className="popup__input-container">
					<input className="popup__input popup__input_text_url" form="formPlace" type="url" name="url" id="url-input"
						placeholder="Ссылка на картинку" required />
					<span className="popup__input-error url-input-error"></span>
				</div>
				<button className="popup__button popup__button_disabled link" type="submit" form="formPlace">Создать</button>
			</PopupWithForm>

			<ImagePopup
				card={selectedCard}
				isOpen={selectedCard}
				onClose={closeAllPopups}
				link={selectedCard.link}
				name={selectedCard.name}
			/>

			<div className="popup popup_type_confirm">
				<div className="popup__container popup__container-confirm">
					<button className="popup__close-icon" type="button">
						<img className="popup__close-icon-img link" src='/images/close-icon.svg'
							alt="Кнопка закрытия окна" />
					</button>
					<h2 className="popup__title popup__title-confirm">Вы уверены?</h2>
					<form className="popup__form" action="#" id="formDeleteCard" name="formDeleteCard">
						<button className="popup__button link" type="submit" form="formDeleteCard">Да</button>
					</form>
				</div>
			</div>

		</div>
	);
}

export default App;