import { Container } from "../../Layout/container/Container";
import styleTop from './Top.module.scss';

export const Top = () => (
    <div className="top">
        <a  href="tel:8 930 490 26 20" className="telephone">
            8 930 490 26 20
        </a>
        <img className="logo" src="assets/svg/logo" alt="Inspire shop"></img>
        <ul className="top__icons">
            <li className="top__icons-search"></li>
            <li className="top__icons-cart"></li>
            <li className="top__icons-favorites"></li>
        </ul>
    </div>
)