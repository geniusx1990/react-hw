import { MenuItem } from '../../utils/types';
import './style.css';


export default function Card({ item }: { item: MenuItem }) {
    return (
        <div className="menu-card">
            <img src={item.img} alt={`${item.meal}`} width={120} height={120} />
            <div className='card_content'>
                <div className='card_content_top'>
                    <h2 className="menu-card__name">{item.meal}</h2>
                    <p className="menu-card__price">$ {item.price.toFixed(2)} USD</p>
                </div>
                <p className="menu-card__description">{item.instructions.slice(0, 110)}</p>
                <div className='inputs'>
                    <input className='input_count' type="text" defaultValue="1" />
                    <button className='button_add'>Add to card</button>
                </div>
            </div>
        </div>
    );
}
