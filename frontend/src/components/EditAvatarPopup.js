import { useRef } from "react";
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup(props) {

  const avatarRef = useRef()

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="avatar"
      title="Обновить аватар"
      buttonTitle="Создать"
      label="Закрыть окно редактирования аватара без сохранения"
      onSubmit={handleSubmit}
      children={
        <>
          <input
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_data_avatar"
            id="avatar"
            ref={avatarRef}
            required />
          <span className="popup__error" id="avatar-error"></span>
        </>
      }
    />)
}

export default EditAvatarPopup