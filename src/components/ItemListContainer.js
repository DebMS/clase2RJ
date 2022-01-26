import React, { useState } from "react";
import ItemCount from "./ItemCount";
import "./components.css";
const ItemListContainer = (props) => {
  const [contador, setContador] = useState(props.initial);

  return (
    <div className="oferta__contenedor">
      <p className="oferta">{props.greeting}</p>
      <p className="producto">{props.producto}</p>
      <p className="precio">{props.precio}</p>
      <ItemCount
        initial={contador}
        stock={props.stock}
        setContador={setContador}
      ></ItemCount>
    </div>
  );
};

export default ItemListContainer;
