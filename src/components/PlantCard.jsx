import { useState } from "react";

function PlantCard({ plant, onAddToCart }) {
  const [inStock, setInStock] = useState(true);

  return (
    <div className="plant-card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      <button
        className="add-btn"
        onClick={() => onAddToCart(plant)}
        disabled={!inStock}
      >
        Add to Cart
      </button>

      <span
        className={inStock ? "in-stock" : "out-stock"}
        onClick={() => setInStock(!inStock)}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default PlantCard;