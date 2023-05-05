import React from "react";

function PizzaForm({
  editId,
  editTopping,
  editSize,
  editVegetarian,
  updateTopping,
  updateSize,
  updateVegetarian,
  handleSubmit
   }) {

    function onHandleSubmit(e) {
      e.preventDefault();
      fetch(`http://localhost:3001/pizzas/${editId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          topping: editTopping,
          size: editSize,
          vegetarian: editVegetarian
        })
      })
      .then(resp => resp.json())
      .then(data => {
        handleSubmit(data);
      })
    }

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={editTopping}
            onChange={e => updateTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select value={editSize} onChange={e => updateSize(e.target.value)} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={editVegetarian}
              onChange={e => updateVegetarian(e.target.checked)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!editVegetarian}
              onChange={e => updateVegetarian(!e.target.checked)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
