import { useState, useEffect } from 'react';

import MenuItem from '../MenuItem/MenuItem';

function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://localhost:7074/menu');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  const menuItems = items.map((item) => (
      <MenuItem key={item.id} item={item} />
));

  return (
    <section className="menu">
      {menuItems}
    </section>
  );
}

export default Menu;