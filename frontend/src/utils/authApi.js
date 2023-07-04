const url = "https://auth.nomoreparties.co";
export const register = (email, password) =>
  fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => check(res));

export const authorize = (email, password) =>
  fetch(`${url}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => check(res));

export const checkToken = (token) =>
  fetch(`${url}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => check(res));

function check(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Возникла ошибка: ${res.status}`);
}
