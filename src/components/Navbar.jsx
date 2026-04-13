function Navbar({ cartCount }) {
return (
<nav className="navbar">
<h1 className="logo">Plantsy</h1>
<p className="cart-count">Cart Items: {cartCount}</p>
</nav>
);
}

export default Navbar;