import { useState } from 'react';
import './style.css';
import { MenuItem } from "../../utils/constants";
import Card from "../Card/Card";

const MENUSORT = [
    { id: 0, name: 'Dessert' },
    { id: 1, name: 'Dinner' },
    { id: 2, name: 'Breakfast' }
];

interface MenuListProps {
    items: MenuItem[]; 
}

export default function MenuList({ items }: MenuListProps) {
    const [activeTabs, setActiveTabs] = useState<string[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(10);

    const handleTabClick = (category: string) => {
        setActiveTabs(prevActiveTabs =>
            prevActiveTabs.includes(category)
                ? prevActiveTabs.filter(tab => tab !== category)
                : [...prevActiveTabs, category]
        );
        setVisibleCount(10);
    };

    const filteredItems = items.filter(item =>
        activeTabs.length === 0 || 
        activeTabs.some(category => item.category.includes(category))
    );

    const visibleItems = filteredItems.slice(0, visibleCount);

    const handleSeeMore = () => {
        setVisibleCount(prevCount => prevCount + 10);
    };

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
                {visibleItems.map((item: MenuItem) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            {visibleItems.length < filteredItems.length && (
                <button className="more" onClick={handleSeeMore}>
                    See More
                </button>
            )}
        </>
    );
}
