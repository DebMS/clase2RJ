import React from "react";

const ItemCount = (props) => {
  const { stock, initial, setContador } = props;
  const onAdd = (e, count, stock) => {
    if (e.target.matches(".aumentar")) {
      if (count <= stock - 1) {
        setContador(initial + 1);
      }
    }
    if (e.target.matches(".decrementar")) {
      if (count >= 2) {
        setContador(initial - 1);
      }
    }
  };
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
