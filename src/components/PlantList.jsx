import PlantCard from "./PlantCard";

function PlantList({ plants, onAddToCart }) {
return (
<div className="plant-list">
{plants.map((plant) => (
<PlantCard
key={plant.id}
plant={plant}
onAddToCart={onAddToCart}
/>
))}
</div>
);
}

export default PlantList;