import {FC} from "react";
import './main.css'
import book from '../../assets/book.png';

const Main: FC = () => {
  return <div className='main'>
    <div className="preview">
      <img src={book} alt="book" className="book"/>
    </div>

    <div className="description">
      <div className='sup'>Книга Султановой Назгуль</div>
      <div className='title'>Вы слышите волны?</div>

      <div>
        Дорогой читатель. В этот сборник вошли мои выбранные стихотворения и илюстрации нарисованные мной самой.
        Для покупки книги вы можете связаться с автором или скачать электронную версию отрывка сборника?
      </div>
      <div className='actions'>
        <a rel="noreferrer" href="#links" className='buy-link'>Купить</a>
        <a download='doc.pdf' href="../../assets/doc.pdf" className='download-link'>Скачать отрывок</a>
      </div>
    </div>
  </div>
}

export default Main