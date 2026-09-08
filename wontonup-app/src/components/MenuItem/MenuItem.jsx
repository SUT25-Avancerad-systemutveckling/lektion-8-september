function MenuItem({ item, onAdd }) {

    return (
        <div className="menu-item">
            <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
            <div className="menu-item-footer">
                <span className="menu-item-price">{Number(item.price).toFixed(2)} kr</span>
                <button type="button" className="add-to-cart">
                    Add
                </button>
            </div>
        </div>
    );
}

export default MenuItem;