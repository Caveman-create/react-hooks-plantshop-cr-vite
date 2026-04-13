function CartItem({
item,
onIncreaseQuantity,
onDecreaseQuantity,
onRemoveFromCart,
}) {
return (
<div className="cart-item">
<h4>{item.name}</h4>
<p>${item.price}</p>
<p>Qty: {item.quantity}</p>

<div className="cart-buttons">
<button onClick={() => onIncreaseQuantity(item.id)}>+</button>
<button onClick={() => onDecreaseQuantity(item.id)}>-</button>
<button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
</div>
</div>
);
}

export default CartItem;
