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
          stock={20}
          initial={3}
        />
        <ItemListContainer
          greeting="OFERTA!!"
          producto="Pantalon"
          precio="$1500"
          stock={30}
          initial={1}
        />
        <ItemListContainer
          greeting="OFERTA!!"
          producto="Zapatilla"
          precio="$1500"
          stock={10}
          initial={2}
        />
      </div>
    </>
  );
}

export default App;
