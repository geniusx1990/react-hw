import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { getImgUrl } from "../../utils/getImageUrl";
import './style.css';

export default function CartCounter() {
    const orders = useSelector((state: RootState) => state.orders.items);

    const totalCount = orders.reduce((sum, item) => sum + item.quantity, 0);
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/orders');
    };

    return (
        <div className="header__cart" onClick={handleCartClick} >
            <img src={getImgUrl('cart_icon.svg')} alt="cart" />
            <span className="header__cart-counter">{totalCount}</span>
        </div>
    );
}