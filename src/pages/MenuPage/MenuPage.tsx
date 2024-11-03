import MenuList from '../../components/MenuList/MenuList';
import './style.css';

export default function MenuPage() {
    return (
        <section className='menu-section'>
            <div className='menu_wrapper'>
                <h1 className="menu_title">Browse our menu</h1>
                <p className='menu_description'>Use our menu to place an order online, or <span className="tooltip" data-tooltip="+370 23232 23232">phone</span> our store <br />
                    to place a pickup order. Fast and fresh food.
                </p>
                <MenuList />
                <button className='more'>See more</button>
            </div>

        </section>
    )
}