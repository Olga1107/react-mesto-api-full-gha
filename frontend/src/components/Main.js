import { useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

import Card from './Card'

function Main(props) {


  const currentUser = useContext(CurrentUserContext);


  function handleCardClick(card) {
    props.setSelectedCard({
      isOpen: true,
      link: card.link,
      name: card.name
    })
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__information">
          <div className="overlay" onClick={props.onEditAvatar}>
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="profile__photo" />
          </div>
          <div className="profile__title">
            <h1 className="profile__name" >{currentUser.name}</h1>
            <p className="profile__profession" >{currentUser.about}</p>
          </div>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать информацию профиля"
            onClick={props.onEditProfile}></button>
        </div>
        <button
          type="button"
          className="profile__add-button"
          name="add-button"
          aria-label="Добавить карточку с фото"
          onClick={props.onAddPlace}></button>
      </section>
      <section className="photo-gallery">
        {props.cards.map((cardData) => (
          <Card
            key={cardData._id}
            card={cardData}
            link={cardData.link}
            name={cardData.name}
            onCardClick={handleCardClick}
            onCardLike={props.handleCardLike}
            onCardDelete={props.handleCardDelete}
          />
        ))}
      </section>
    </main>
  )

}

export default Main