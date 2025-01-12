import { NavLink } from 'react-router-dom';
import { HEADERLINKS } from '../../utils/constants';
import { getImgUrl } from '../../utils/getImageUrl';
import './style.css';
import CartCounter from '../CartCounter/CartCounter';

export default function HeaderComponent() {

    return (
        <header className="header">
            <span className="header__logo"><img src={getImgUrl('logo.svg')} alt="logo" /></span>
            <div className='header__content'>
                <nav className="header__navigation">
                <ul className="header__nav-list">
                    {HEADERLINKS.map((link) => (
                        <li key={link.id} className="header__nav-item">
                                <NavLink 
                                    to={link.route} 
                                    className={({ isActive }) => 
                                        isActive ? "header__nav-link active" : "header__nav-link"
                                    }
                                >
                                    {link.name}
                                </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
                <CartCounter />
            </div>
        </header>
    )
}