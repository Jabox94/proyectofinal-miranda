import Logo from "./Logo/Logo"
import WidgetContainer from "./WidgetContainer/WidgetContainer"
import NavMenu from "./NavMenu/NavMenu"

import './NavBar.css'

// Variables
let responsive = window.innerWidth


export default function NavBar() {
  return (
    responsive <= 992 ?
      <nav className="navbar w-full">
        <div className="navbar-container-mobile w-full">
          <Logo />
          <WidgetContainer />
        </div>
      </nav>
      :
      <nav className="navbar w-full">
        <div className="navbar-container-desktop w-full">
          <Logo />
          <NavMenu />
          <WidgetContainer />
        </div>
      </nav>

  )
}