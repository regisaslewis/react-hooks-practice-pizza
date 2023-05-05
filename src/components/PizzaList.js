import React from "react";
import Pizza from "./Pizza";

function PizzaList({ allPizzas, handleItem }) {

  const pizzaArray = allPizzas.map(e => <Pizza handleItem={handleItem} key={e.id} item={e} />)

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaArray}
      </tbody>
    </table>
  );
}

export default PizzaList;
