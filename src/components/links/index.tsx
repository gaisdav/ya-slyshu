import { FC } from "react"
import './styles.css'

interface IProps {
    header?: boolean;
}

export const Links: FC<IProps> = ({ header = false }) => {
    return <div className="links">
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
            className="instagram"
            rel="noreferrer"
            href="https://instagram.com/sultanovanazgul?utm_medium=copy_link"
            target='_blank'
        />
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className="vk" rel="noreferrer" href="https://vk.com/id_sultanova_nazgul" target='_blank' />
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className="telegram" rel="noreferrer" href="https://t.me/naz_sultanova" target='_blank' />
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className="whatsapp" rel="noreferrer" href="https://wa.me/8615950564940" target='_blank' />
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}    
        {!header && <a className="email" rel="noreferrer" href="mailto:sultanova-nazgul@mail.ru" target='_blank' />}
    </div>
}