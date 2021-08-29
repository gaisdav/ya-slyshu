import {FC} from "react";
import './styles.css'
import naz from '../../assets/naz.jpeg'

const Author: FC = () => {
  return <div className='author_section'>
    <div className='author_photo_wrapper' />

    <div className='author_info'>
      <div className='author_title'>
        Моя история
      </div>
      <div className='author_about'>
        <p>
          "Меня зовут Назгуль, я родом из Зилаирского района Республики Башкортостан. Родилась и выросла в селе
          Юлдыбаево, там же начала писать свои первые стихи. Мне тогда было 6 лет, писала я на башкирском
          языке
          про природу и про свою семью. Мои школьные стихи, к сожалению, не сохранились. Самое ранее
          стихотворение
          из этого сборника было написано в 2014 году («Маме»)".
        </p>

        <sub>Султанова Назгуль</sub>
      </div>
    </div>
  </div>
}

export default Author