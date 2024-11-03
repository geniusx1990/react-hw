import { MenuItem } from '../../utils/constants';
import { getImgUrl } from '../../utils/getImageUrl';
import './style.css';

interface MenuCardProps {
    item: MenuItem;
}


export default function Card({ item }: MenuCardProps) {
    return (
        <div className="menu-card">
            <img src={getImgUrl(`${item.img}`)} alt={`${item.name}`} width={120} height={120}/>
            <div className='card_content'>
                <div className='card_content_top'>
                    <h2 className="menu-card__name">{item.name}</h2>
                    <p className="menu-card__price">$ {item.price.toFixed(2)} USD</p>
                </div>
                <p className="menu-card__description">{item.description}</p>
                <div className='inputs'>
                    <input className='input_count' type="text" defaultValue="1" />
                    <button className='button_add'>Add to card</button>
                </div>
            </div>
        </div>
    );
}
