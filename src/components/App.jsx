import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Cart from "./Cart";

function App() {
const [plants, setPlants] = useState([]);
const [search, setSearch] = useState("");
const [cart, setCart] = useState([]);

useEffect(() => {
fetch("http://localhost:6001/plants")
.then((res) => res.json())
.then((data) => setPlants(data));
}, []);

function handleAddPlant(newPlant) {
setPlants([...plants, newPlant]);
}

const filteredPlants = plants.filter((plant) =>
plant.name.toLowerCase().includes(search.toLowerCase())
);

function handleAddToCart(plant) {
const existingItem = cart.find((item) => item.id === plant.id);

if (existingItem) {
const updatedCart = cart.map((item) =>
item.id === plant.id
? { ...item, quantity: item.quantity + 1 }
: item
);
setCart(updatedCart);
} else {
setCart([...cart, { ...plant, quantity: 1 }]);
}
}

function handleIncreaseQuantity(id) {
const updatedCart = cart.map((item) =>
item.id === id ? { ...item, quantity: item.quantity + 1 } : item
);
setCart(updatedCart);
}

function handleDecreaseQuantity(id) {
const updatedCart = cart
.map((item) =>
item.id === id ? { ...item, quantity: item.quantity - 1 } : item
)
.filter((item) => item.quantity > 0);

setCart(updatedCart);
}

function handleRemoveFromCart(id) {
const updatedCart = cart.filter((item) => item.id !== id);
setCart(updatedCart);
}

const cartTotal = cart.reduce((total, item) => {
return total + item.price * item.quantity;
}, 0);

return (
<div className="app">
<Navbar cartCount={cart.length} />
<SearchBar search={search} setSearch={setSearch} />
<NewPlantForm onAddPlant={handleAddPlant} />

<div className="main-layout">
<PlantList plants={filteredPlants} onAddToCart={handleAddToCart} />
<Cart
cart={cart}
total={cartTotal}
onIncreaseQuantity={handleIncreaseQuantity}
onDecreaseQuantity={handleDecreaseQuantity}
onRemoveFromCart={handleRemoveFromCart}
/>
</div>
</div>
);
}

export default App;
