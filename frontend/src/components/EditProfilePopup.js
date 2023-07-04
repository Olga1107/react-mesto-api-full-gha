import { useContext, useEffect, useState } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup(props) {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleName(e) {
    setName(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="edit"
      title="Редактировать профиль"
      buttonTitle="Сохранить"
      label="Закрыть окно редактирования без сохранения"
      onSubmit={handleSubmit}
      children={
        <>
          <input
            onChange={handleName}
            type="text"
            name="name"
            placeholder="Имя"
            className="popup__input popup__input_data_name"
            value={name || ""}
            id="firstname"
            required
            minLength="2"
            maxLength="40" />
          <span className="popup__error" id="firstname-error"></span>
          <input
            onChange={handleDescription}
            type="text"
            name="about"
            placeholder="О себе"
            className="popup__input popup__input_data_description"
            value={description || ""}
            id="aboutself"
            required
            minLength="2"
            maxLength="200" />
          <span className="popup__error" id="aboutself-error"></span>
        </>
      }
    />
  )
}

export default EditProfilePopup