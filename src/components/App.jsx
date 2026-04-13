import { useState, useEffect } from "react";
import Search from "./Search";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";

function App() {
const [plants, setPlants] = useState([]);
const [search, setSearch] = useState("");

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

return (
<div>
<Search search={search} setSearch={setSearch} />
<NewPlantForm onAddPlant={handleAddPlant} />
<PlantList plants={filteredPlants} />
</div>
);
}

export default App;
