import {FC} from "react";
import { Links } from "../../components/links";
import './header.css'

const Header: FC = () => {
  return (
    <nav className='header'>
      <div>
        <a className="menu-item" rel="noreferrer" href="#main">Главная</a>
        <a className="menu-item" rel="noreferrer" href="#author">Об авторе</a>
        <a className="menu-item" rel="noreferrer" href="#book">О книге</a>
        <a className="menu-item" rel="noreferrer" href="#links">Купить</a>
      </div>

      <div className='logo'>
        <Links header />
      </div>
    </nav>)
}

export default Header
