import {FC} from "react";
import './main.css'
import book from '../../assets/book.png';

const Main: FC = () => {
    return <div className='main'>
        <div className="description">
            <div className='sup'>сборник стихов от Султановой Назгуль</div>
            <div className='title'>Вы слышите волны?</div>

            <div>Какой нибудь короткий текст Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus
                deserunt dolores dolorum ?</div>

            <div className='actions'>
                <a rel="noreferrer"  href="#links" className='buy-link'>Купить</a>
                <a href="#links" className='download-link'>Скачать отрывок</a>
            </div>
        </div>
        <div className="preview">
            <img src={book} alt="book" className="book"/>
        </div>
    </div>
}

export default Main