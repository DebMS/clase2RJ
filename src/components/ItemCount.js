import React from "react";

const ItemCount = (props) => {
  const { stock, initial, onAdd } = props;
  return (
    <div className="contadorProductos">
      <button className="decrementar" onClick={(e) => onAdd(e, initial, stock)}>
        -
      </button>
      <span>{initial}</span>
      <button className="aumentar" onClick={(e) => onAdd(e, initial, stock)}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
