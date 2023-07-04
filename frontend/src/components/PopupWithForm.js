function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name}-form ${props.isOpen && "popup_opened"}`}>
      <div className="popup__box">
        <h3 className="popup__title">{props.title}</h3>
        <form
          onSubmit={props.onSubmit}
          className="popup__container form"
          name={`${props.name}form`}>
          {props.children}
          <button
            type="submit"
            name="saving"
            className="popup__save-button">{props.buttonTitle}</button>
        </form>
      </div>
      <button
        onClick={props.onClose}
        type="button"
        className={`popup__close-button popup__close-button-${props.name}`}
        aria-label={`${props.label}`}></button>
    </div>)
}

export default PopupWithForm