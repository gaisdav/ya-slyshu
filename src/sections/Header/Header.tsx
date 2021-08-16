import {FC} from "react";
import './header.css'

const Header: FC = () => {
  return (
    <nav className='header'>
      <div>
        <a rel="noreferrer" href="#main">Основное</a>
        <a rel="noreferrer" href="#author">Об авторе</a>
        <a rel="noreferrer" href="#book">О книге</a>
        <a rel="noreferrer" href="#links">Купить</a>
      </div>

      <div className='logo'>
        ссылки
      </div>
    </nav>)
}

export default Header
