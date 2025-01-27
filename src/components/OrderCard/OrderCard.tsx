import './style.css';
import { useDispatch } from 'react-redux';
import { updateOrderQuantity } from '../../features/ordersSlice';

interface OrderCardProps {
    id: number;
    img: string;
    meal: string;
    quantity: number;
    price: number;
    onRemove: (id: number) => void;
}

export default function OrderCard({ id, img, meal, quantity, price, onRemove }: OrderCardProps) {
    const dispatch = useDispatch();

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Math.max(1, Number(e.target.value)); // Минимум 1 товар
        dispatch(updateOrderQuantity({ id, quantity: newQuantity }));
    };

    const totalPrice = (price * quantity).toFixed(2);

    return (
        <div className='order_card'>
            <img src={img} alt={meal} width={120} height={120} className='order_card-image' />
            <div className='order_card-details'>
                <h2 className='order_card-title'>{meal}</h2>
                <div className='content'>
                    <p className='order_card-price'>${totalPrice} USD</p>
                    <div className='order_card_block'>
                        <input
                            type="number"
                            min="1"
                            defaultValue={quantity}
                            className="order_card-quantity"
                            onChange={handleQuantityChange}
                        />
                        <button className="order_card-remove" onClick={() => onRemove(id)}>
                            X
                        </button>
                    </div></div>
            </div>
        </div>
    );
}
