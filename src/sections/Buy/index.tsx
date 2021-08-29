import { FC } from "react";
import { Links } from "../../components/links";
import './styles.css'

const Buy: FC = () => {
    return <div className='buy_section'>
        <h2 className="title">
            Для покупки сборника, вы можете связаться с автором по одной из ниже указанных ссылок
        </h2>

        <Links />
    </div>
}

export default Buy