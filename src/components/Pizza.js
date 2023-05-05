import React from "react";

function Pizza({ handleItem, item }) {

  function onHandleItem() {
    handleItem(item);
  }

  return (
    <tr>
      <td>{item.topping}</td>
      <td>{item.size}</td>
      <td>{item.vegetarian ? <p style={{"color": "green", "fontWeight": "bold"}}>Yes</p> : <p style={{"color": "red"}}>No</p>}</td>
      <td>
        <button onClick={onHandleItem} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
