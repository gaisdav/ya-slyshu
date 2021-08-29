import { FC } from "react"
import "./styles.css"

export const Menu: FC = () => {
    return <div className="menu">
        <a className="menu-item" rel="noreferrer" href="#main">Главная</a>
        <a className="menu-item" rel="noreferrer" href="#author">Об авторе</a>
        <a className="menu-item" rel="noreferrer" href="#book">О книге</a>
        <a className="menu-item" rel="noreferrer" href="#links">Купить</a>
    </div>
}