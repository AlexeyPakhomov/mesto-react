import React from "react";
import { iconClosePopup } from "../utils/constants";

function PopupWithForm({ isOpen, onClose, name, title, children, buttonText }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button className="popup__close-icon" type="button" onClick={onClose}>
          <img className="popup__close-icon-img link" src={iconClosePopup} alt="Кнопка закрытия окна" />
        </button>
        <h2 className="popup__title popup__title-avatar">{title}</h2>
        <form className="popup__form" action="#" name={`form${name}`}>
          {children}
          <button className="popup__button popup__button_disabled link" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
