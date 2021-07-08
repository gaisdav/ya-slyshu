import {FC} from "react";
import './styles.css'

const Buy: FC = () => {
    return <div className='buy_section'>
        <h4>
            Как приобрести сборник?
        </h4>

        <div className="links">
            <a rel="noreferrer" href="https://instagram.com/sultanovanazgul?utm_medium=copy_link"
               target='_blank'>Instagram</a>
            <a rel="noreferrer" href="https://vk.com/id_sultanova_nazgul" target='_blank'>VK</a>
            <a rel="noreferrer" href="#" target='_blank'>Telegram</a>
            <a rel="noreferrer" href="#" target='_blank'>Whats-App</a>
            <a rel="noreferrer" href="#" target='_blank'>Email</a>
        </div>
    </div>
}

export default Buy