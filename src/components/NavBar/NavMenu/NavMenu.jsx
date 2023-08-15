import { Link } from "react-router-dom"
export default function NavMenu() {
  return (
    <ul className="navmenu-list">
      <li className="navmenu-list-item">
        <Link to="/" className="navmenu-list-link">Inicio</Link>
      </li>
      <li className="navmenu-list-item">
        <Link to="/productos" className="navmenu-list-link">Productos</Link>
      </li>
      <li className="navmenu-list-item">
        <Link to="/sobrenosotros" className="navmenu-list-link">Nosotros</Link>
      </li>
    </ul>
  )
}