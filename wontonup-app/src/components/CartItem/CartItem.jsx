function CartItem({ item }) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>{Number(item.price).toFixed(2)} kr</p>
      <button type="button">Remove</button>
    </div>
  );
}

export default CartItem;