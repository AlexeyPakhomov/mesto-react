import React from "react";

function PopupWithForm(props) {
	return (

		<div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
			<div className="popup__container">
				<button className="popup__close-icon" type="button" onClick={props.onClose}>
					<img className="popup__close-icon-img link" src='/images/close-icon.svg'
						alt="Кнопка закрытия окна" />
				</button>
				<h2 className="popup__title popup__title-avatar">{props.title}</h2>
				<form
					className="popup__form popup__form_block_avatar"
					action="#"
					id="formAvatar"
					name={`form${props.name}`}
					noValidate>
					{props.children}
				</form>
			</div>
		</div>
	)
}

export default PopupWithForm;