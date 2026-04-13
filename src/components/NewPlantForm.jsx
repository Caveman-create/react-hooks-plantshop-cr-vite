import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [price, setPrice] = useState("");

function handleSubmit(e) {
e.preventDefault();

const newPlant = { name, image, price };

fetch("http://localhost:6001/plants", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(newPlant),
})
.then((res) => res.json())
.then((data) => onAddPlant(data));
}

return (
<form onSubmit={handleSubmit}>
<input
placeholder="Plant name" // 👈 ADD
value={name}
onChange={(e) => setName(e.target.value)}
/>

<input
placeholder="Image URL" // 👈 ADD
value={image}
onChange={(e) => setImage(e.target.value)}
/>

<input
placeholder="Price" // 👈 ADD
value={price}
onChange={(e) => setPrice(e.target.value)}
/>
<button type="submit">Add Plant</button>
</form>
);
}

export default NewPlantForm;

