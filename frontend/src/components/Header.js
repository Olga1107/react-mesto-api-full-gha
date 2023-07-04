import { Link, Route, Routes } from 'react-router-dom';
import logo from '../images/Logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип сервиса Mesto"
        className="header__logo" />
      <Routes>
        <Route exact path="/" element={<div className="header__info">
          <p className="header__mail">{props.headerMail}</p>
          <Link to="/sign-in" className="header__out-link" onClick={props.signOut}>Выйти</Link>
        </div>} />
        <Route path="/sign-in" element={<Link to="/sign-up" className="header__sign-link">Регистрация</Link>} />
        <Route path="/sign-up" element={<Link to="/sign-in" className="header__sign-link">Войти</Link>} />
      </Routes>
    </header>)
}

export default Header;