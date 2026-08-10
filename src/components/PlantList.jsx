import PlantCard from "./PlantCard";

function PlantList({ plants, onAddToCart }) {
return (
<ul className="cards">
{plants.map((plant) => (
<PlantCard
key={plant.id}
plant={plant}
onAddToCart={onAddToCart}
/>
))}
</ul>
);
}

export default PlantList;