import { useState } from "react";
import { getImgUrl } from "../../utils/getImageUrl";
import './style.css';

export default function CartCounter() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [count, setCount] = useState(0);

    return (
        <div className="header__cart">
            <img src={getImgUrl('cart_icon.svg')} alt="cart" />
            <span className="header__cart-counter">{count}</span>
        </div>
    )
}