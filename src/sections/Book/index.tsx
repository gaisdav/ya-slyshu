import { FC } from "react";
import './styles.css'

const Book: FC = () => {
    return <div className='book_section'>
        <div className='book_section__description'>
            <div className="chapter-title">О чем сборник?</div>
            <p>
                О нас с вами!
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi deleniti dolore illo itaque nam
                optio repudiandae, saepe unde vero? Cupiditate distinctio facilis magnam porro quia quo ratione vero
                voluptates.
                <br />
                <br />
                Сборник состоит из 4 разделов:
            </p>
        </div>
        <div className='book_section_chapter_wrap'>
            <div className='book_section_chapter'>
                <div>01/</div>
                <div className="chapter-title">Вы слышите волны?</div>
                <div>
                    "Мои мысли, идеи, переживания.
                </div>
            </div>
            <div className='book_section_chapter'>
                <div>02/</div>
                <div className="chapter-title">Сначала был большой взрыв</div>

                <div>
                    "Стихи о любви."
                </div>
            </div>
            <div className='book_section_chapter'>
                <div>03/</div>
                <div className="chapter-title">Don’t enter my ocean</div>

                <div>
                    "Стихи на английском языке."
                </div>
            </div>
            <div className='book_section_chapter'>
                <div>04/</div>
                <div className="chapter-title">Маленькое/ Большое</div>

                <div>
                    "Четверостишья и поэмы."    
                </div>
            </div>

        </div>
    </div>
}

export default Book