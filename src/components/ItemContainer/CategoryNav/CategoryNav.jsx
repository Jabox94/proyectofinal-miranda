import './CategoryNav.css'

import { NavLink } from 'react-router-dom'

export default function CategoryNav() {
  return (
    <>
      <nav className='category-nav'>
        <NavLink
          to='/categoria/Comida'
          className={'button category-nav-link'}
        >
          Comida
        </NavLink>

        <NavLink
          to='/categoria/Bebidas'
          className={'button category-nav-link'}
        >
          Bebidas
        </NavLink>

        <NavLink
          to='/categoria/Higiene'
          className={'button category-nav-link'}
        >
          Higiene
        </NavLink>

        <NavLink
          to='/categoria/Otros'
          className={'button category-nav-link'}
        >
          Otros
        </NavLink>
      </nav>
    </>
  )
}