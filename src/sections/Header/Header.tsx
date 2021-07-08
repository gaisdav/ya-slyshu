import {FC} from "react";
import './header.css'

const Header: FC = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                logo
            </div>
            <div>
                <a rel="noreferrer" href="#main">Основное</a>
                <a rel="noreferrer" href="#author">Об авторе</a>
                <a rel="noreferrer" href="#book">О книге</a>
                <a rel="noreferrer" href="#links">Купить</a>
            </div>
        </nav>)
}

export default Header
