import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";


export const Header = () =>
{
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>
  {
    setMenu(!menu)
  }


  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>

      <Link to="/">
        <div className="logo">
          <img src="/images/Logo.jpg" alt="Logo" width="150" />
        </div>
      </Link>

      <ul>
        {/* <li>
          <Link to="/">INICIO</Link>
        </li> */}
        <li>
          <Link to="/quienessomos">Quienes Somos</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>

      </ul>

      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>

    </header>
  )
}