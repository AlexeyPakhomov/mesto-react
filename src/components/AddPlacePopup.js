import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm name="photo" title="Новое место" buttonText="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__input-container">
        <input
          className="popup__input popup__input_text_place"
          form="formPlace"
          type="text"
          name="name"
          id="place-input"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error place-input-error"></span>
      </div>
      <div className="popup__input-container">
        <input
          className="popup__input popup__input_text_url"
          form="formPlace"
          type="url"
          name="link"
          id="url-input"
          placeholder="Ссылка на картинку"
          required
          value={link}
          onChange={handleChangeLink}
        />
        <span className="popup__input-error url-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
