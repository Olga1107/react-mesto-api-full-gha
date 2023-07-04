function InfoTooltip(props) {
  return (
    <div className={`popup popup_tool ${props.isOpen && "popup_opened"}`}>
      <div className="popup__box">
        <img src={props.icon} alt="Статус-лого" className="popup__tool-logo-status" />
        <h2 className="popup__title popup__title_new">{props.title}</h2>
      </div>
      <button
        onClick={props.onClose}
        type="button"
        className="popup__close-button popup__close-button-infotool"
        aria-label="Закрыть информационное окно"></button>
    </div>
  );
}

export default InfoTooltip;