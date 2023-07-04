import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `photo-gallery__like-button ${isLiked && 'photo-gallery__like-button_active'}`
  );;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="photo-gallery__card">
      <img
        alt={props.card.name}
        className="photo-gallery__image"
        src={props.card.link}
        onClick={handleClick} />
      <div className="photo-gallery__caption">
        <h2 className="photo-gallery__title" >{props.card.name}</h2>
        <div className="like-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            aria-label="Сердечко для лайка"></button>
          <span className="number-of-likes">{props.card.likes.length}</span>
        </div>
      </div>
      {isOwn && <button
        type="button"
        className="photo-gallery__remove-button"
        onClick={handleDeleteClick}
        aria-label="Значок удалить в виде корзины"></button>}
    </div>
  )


}

export default Card