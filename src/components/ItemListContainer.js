import "./components.css";
const ItemListContainer = (props) => {
  return (
    <div className="oferta__contenedor">
      <p className="oferta">{props.greeting}</p>
      <p className="producto">{props.producto}</p>
      <p className="precio">{props.precio}</p>
    </div>
  );
};

export default ItemListContainer;
