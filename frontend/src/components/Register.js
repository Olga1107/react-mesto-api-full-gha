import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Register(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(evt) {
    if (evt.target.name === "Email") {
      setEmail(evt.target.value);
    } else if (evt.target.name === "Password") {
      setPassword(evt.target.value);
    }
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!email) {
      console.log("Не введен email");
      return;
    }
    if (!password) {
      console.log("Не введен пароль");
      return;
    }
    props.handleRegister(email, password);
  }

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <section className="sign">
      <h2 className="sign__title">Регистрация</h2>
      <form
        className="sign__form"
        action="#"
        name="sign-form"
        onSubmit={handleSubmit}>
        <input
          type="email"
          className="sign__input"
          placeholder="E-mail"
          name="Email"
          onChange={handleChange}
          value={email}
          required></input>
        <input
          type="password"
          className="sign__input"
          placeholder="Пароль"
          name="Password"
          onChange={handleChange}
          value={password}
          required></input>
        <button
          type="submit"
          className="sign__button">Зарегистрироваться</button>
      </form>
      <p className="sign__text">Уже зарегистрированы?{" "}<Link to="/sign-in" className="sign__link">Войти</Link></p>
    </section>)
}

export default Register