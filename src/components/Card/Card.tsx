import { MenuItem } from '../../utils/types';
import { useDispatch } from 'react-redux';
import { addToOrder } from '../../features/ordersSlice';
import './style.css';

export default function Card({ item }: { item: MenuItem }) {
    const dispatch = useDispatch();

    const handleAddToCard = () => {
        console.log(item.id)
        const quantityInput = document.querySelector(`#quantity-${item.id}`) as HTMLInputElement;
        const quantity = parseInt(quantityInput.value, 10) || 1;

        dispatch(addToOrder({ ...item, quantity }));
    };

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
                    <input id={`quantity-${item.id}`} className='input_count' type="text" defaultValue="1" />
                    <button className='button_add' onClick={handleAddToCard}>Add to card</button>
                </div>
            </div>
        </div>
    );
}
