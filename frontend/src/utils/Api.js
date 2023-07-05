export default class Api {
  constructor(settings) {
    this._url = settings.url;
    this._headers = settings.headers;
  }

  //Проверка данных
  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Упс, что-то пошло не так, ошибка: ${res.status}`);
  }

  //Возвращение данных о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => this._check(res))
  }

  //Редактирование информации о пользователе
  setUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    })
      .then(res => this._check(res))
  }

  //Редактирование аватара
  setUserAvatar(userData) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userData
      })
    })
      .then(res => this._check(res))
  }

  //Запрос начальных карточек
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => this._check(res))
  }

  //Добавление новых карточек
  addCards(cardData) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
      .then(res => this._check(res))

  }

  //Удаление карточек
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(res => this._check(res))
  }

  //Поставить лайк на карточке
  putLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(res => this._check(res))
  }

  //Удалить лайк на карточке
  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(res => this._check(res))
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then((res) => this._check(res));
  }

}


export const api = new Api({
  url: 'https://api.domainname.helga.nomoreparties.sbs',
  headers: {
    'Content-Type': 'application/json'
  }
})