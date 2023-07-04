import { useEffect, useState } from "react"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup(props) {

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  function handleName(e) {
    setName(e.target.value)
  }

  function handleLink(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleAddPlaceSubmit({ name, link });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="add"
      title="Новое место"
      buttonTitle="Создать"
      label="Закрыть окно добавления карточки без сохранения"
      onSubmit={handleSubmit}
      children={
        <>
          <input
            onChange={handleName}
            type="text"
            name="name"
            placeholder="Название"
            className="popup__input popup__input_data_place-name"
            value={name || ""} id="placename"
            required
            minLength="2"
            maxLength="30" />
          <span className="popup__error" id="placename-error"></span>
          <input
            onChange={handleLink}
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_data_url-on-picture"
            value={link || ""}
            id="urlonpicture"
            required />
          <span className="popup__error" id="urlonpicture-error"></span>
        </>
      }
    />)
}

export default AddPlacePopup