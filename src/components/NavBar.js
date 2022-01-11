import logo from "../media/logo_small.png";

const NavBar = () => {
  return (
    <>
      <ul className="menu__principal">
        <img className="menu__logo" src={logo} alt="menu__logo" />
        <li className="menu__principal-categoria">
          <a className="Inicio" href="#">
            Inicio
          </a>
        </li>
        <li className="menu__principal-categoria">
          <a className="remeras" href="#">
            Remeras
          </a>
        </li>
        <li className="menu__principal-categoria">
          <a className="pantalones" href="#">
            Pantalones
          </a>
        </li>
        <li className="menu__principal-categoria">
          <a className="accesorios" href="#">
            Accesorios
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
