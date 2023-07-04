function ImagePopup(props) {
  return (
    <div className={`popup popup_dark-background view-photo ${props.isOpen && "popup_opened"}`}>
      <div className="popup__box-view">
        <img
          alt={props.card.name}
          className="popup__image"
          src={props.card.link} />
        <h3 className="popup__caption-photo">{props.card.name}</h3>
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-button popup__close-button-view"
          aria-label="Закрыть окно просмотра"></button>
      </div>
    </div>
  )
}

export default ImagePopup