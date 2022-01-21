// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <div className="contenedor__item">
        <ItemListContainer
          greeting="OFERTA!!"
          producto="Remera"
          precio="$1500"
        />
        <ItemListContainer
          greeting="OFERTA!!"
          producto="Pantalon"
          precio="$1500"
        />
        <ItemListContainer
          greeting="OFERTA!!"
          producto="Zapatilla"
          precio="$1500"
        />
      </div>
    </>
  );
}

export default App;
