export default function NavMenu() {
  return (
    <ul className="navmenu-list">
      <li className="navmenu-list-item">
        <a href="/" className="navmenu-list-link">Inicio</a>
      </li>
      <li className="navmenu-list-item">
        <a href="/productos" className="navmenu-list-link">Productos</a>
      </li>
      <li className="navmenu-list-item">
        <a href="/sobrenosotros" className="navmenu-list-link">Nosotros</a>
      </li>
    </ul>
  )
}