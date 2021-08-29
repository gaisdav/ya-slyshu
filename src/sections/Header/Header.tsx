import {FC} from "react";
import { Links } from "../../components/links";
import { Menu } from "../../components/menu";
import './header.css'

const Header: FC = () => {
  return (
    <nav className='header'>
      <Menu />

      <div className='logo'>
        <Links header />
      </div>
    </nav>)
}

export default Header
