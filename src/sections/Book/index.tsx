import {FC} from "react";
import './styles.css'

const Book: FC = () => {
    return <div className='book_section'>
        <div className='book_section__description'>
            <h4>О чем сборник?</h4>
            <p>
                О нас с вами!
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi deleniti dolore illo itaque nam
                optio repudiandae, saepe unde vero? Cupiditate distinctio facilis magnam porro quia quo ratione vero
                voluptates.
                <br/>
                <br/>
                Сборник состоит из 4 разделов:
            </p>
        </div>
        <div className='book_section_chapter_wrap'>
            <div className='book_section_chapter'>
                <h5>Вы слышите волны?</h5>
                <div>
                    "Мои мысли, идеи, переживания."
                </div>
            </div>
            <div className='book_section_chapter'>
                <h5>Сначала был большой взрыв</h5>

                <div>
                    "Стихи о любви."
                </div>
            </div>
            <div className='book_section_chapter'>
                <h5>Don’t enter my ocean</h5>

                <div>
                    "Стихи на английском языке."
                </div>
            </div>
            <div className='book_section_chapter'>
                <h5>Маленькое/ Большое</h5>

                <div>
                    "Четверостишья и поэмы."
                </div>
            </div>

        </div>
        нужны фотографии книг
    </div>
}

export default Book