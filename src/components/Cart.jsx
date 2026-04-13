import CartItem from "./CartItem";

function Cart({
cart,
total,
onIncreaseQuantity,
onDecreaseQuantity,
onRemoveFromCart,
}) {
return (
<aside className="cart">
<h2>Your Cart</h2>

{cart.length === 0 ? (
<p className="empty-cart">Your cart is empty.</p>
) : (
cart.map((item) => (
<CartItem
key={item.id}
item={item}
onIncreaseQuantity={onIncreaseQuantity}
onDecreaseQuantity={onDecreaseQuantity}
onRemoveFromCart={onRemoveFromCart}
/>
))
)}

<h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
</aside>
);
}

export default Cart;

