import React, { useState } from "react";
import ItemCount from "./ItemCount";
import "./components.css";
const ItemListContainer = (props) => {
  const [contador, setContador] = useState(props.initial);
  const onAdd = (e, count, stock) => {
    if (e.target.matches(".aumentar")) {
      if (count <= stock - 1) {
        setContador(contador + 1);
      }
    }
    if (e.target.matches(".decrementar")) {
      if (count >= 2) {
        setContador(contador - 1);
      }
    }
  };
  return (
    <div className="oferta__contenedor">
      <p className="oferta">{props.greeting}</p>
      <p className="producto">{props.producto}</p>
      <p className="precio">{props.precio}</p>
      <ItemCount
        initial={contador}
        stock={props.stock}
        onAdd={onAdd}
      ></ItemCount>
    </div>
  );
};

export default ItemListContainer;
