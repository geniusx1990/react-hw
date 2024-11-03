import { useState } from 'react';
import './style.css';
import { MenuItem, MENUITEMS } from "../../utils/constants";
import Card from "../Card/Card";

const MENUSORT = [
    { id: 0, name: 'Dessert' },
    { id: 1, name: 'Dinner' },
    { id: 2, name: 'Breakfast' }
];

export default function MenuList() {
    const [activeTabs, setActiveTabs] = useState<string[]>([]);

    const handleTabClick = (category: string) => {
        setActiveTabs(prevActiveTabs =>
            prevActiveTabs.includes(category)
                ? prevActiveTabs.filter(tab => tab !== category)
                : [...prevActiveTabs, category]
        );
    };

    const filteredItems = MENUITEMS.filter(item =>
        activeTabs.length === 0 || 
        activeTabs.some(category => item.category.includes(category))
    );

    return (
        <>
            <div className='buttons-sort-container'>
                {MENUSORT.map((item) => (
                    <button
                        key={item.id}
                        className={`sort_button ${activeTabs.includes(item.name) ? 'active' : ''}`}
                        onClick={() => handleTabClick(item.name)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <div className="menu-list">
                {filteredItems.map((item: MenuItem) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </>
    );
}
