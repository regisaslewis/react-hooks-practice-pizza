import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [allPizzas, setAllPizzas] = useState([]);
  const [editId, setEditId] = useState("")
  const [editTopping, setEditTopping] = useState("");
  const [editSize, setEditSize] = useState("Small")
  const [editVegetarian, setEditVegetarian] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
      .then(resp => resp.json())
      .then(data => setAllPizzas(data))
  }, [])

  function handleItem(item) {
    setEditId(item.id)
    setEditTopping(item.topping);
    setEditSize(item.size);
    setEditVegetarian(item.vegetarian);
  };

  function handleSubmit(item) {
    const updatedPizzas = allPizzas.map(e => {
      if (e.id === item.id) {
        return item;
      } else {
        return e;
      }
    })
    setAllPizzas(updatedPizzas);
  }

  return (
    <>
      <Header />
      <PizzaForm 
        editId={editId}
        editTopping={editTopping}
        editSize={editSize}
        editVegetarian={editVegetarian}
        updateTopping={setEditTopping}
        updateSize={setEditSize}
        updateVegetarian={setEditVegetarian}
        handleSubmit={handleSubmit}
      />
      <PizzaList 
        allPizzas={allPizzas} 
        handleItem={handleItem}
      />
    </>
  );
}

export default App;
