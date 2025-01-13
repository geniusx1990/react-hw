import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import './style.css';
import OrderCard from '../../components/OrderCard/OrderCard';
import { removeFromOrder } from '../../features/ordersSlice';

export default function OrderPage() {
    const orders = useSelector((state: RootState) => state.orders.items);
    const dispatch = useDispatch();

    const handleRemoveOrder = (id: number) => {
        dispatch(removeFromOrder(id));
    };

    return (
        <section className='orders-section'>
            <h1 className='orders_title'>Finish your order</h1>
            {orders.length === 0 ? (
                <p>Your order is empty. Add some items!</p>
            ) : (
                <div className='orders_list'>
                    {orders.map(order => (
                        <OrderCard
                            key={order.id}
                            id={order.id}
                            img={order.img}
                            meal={order.meal}
                            quantity={order.quantity}
                            price={order.price}
                            onRemove={handleRemoveOrder}
                        />
                    ))}
                </div>
            )}
            <div className="order_form">
                <div className="form_group">
                    <label htmlFor="street" className="order_form-label">Street</label>
                    <input type="text" id="street" className="order_form-input" />
                </div>
                <div className="form_group">
                    <label htmlFor="house" className="order_form-label">House</label>
                    <input type="text" id="house" className="order_form-input" />
                </div>
                <button className="order_form-button">Order</button>
            </div>
        </section>
    );
}
