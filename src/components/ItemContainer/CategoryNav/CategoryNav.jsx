import './CategoryNav.css'

import { NavLink } from 'react-router-dom'

export default function CategoryNav() {
  return (
    <>
      <nav className='category-nav'>
        <NavLink
          to='/categoria/comida'
          className={'button category-nav-link'}
        >
          Comida
        </NavLink>

        <NavLink
          to='/categoria/bebidas'
          className={'button category-nav-link'}
        >
          Bebidas
        </NavLink>

        <NavLink
          to='/categoria/higiene'
          className={'button category-nav-link'}
        >
          Higiene
        </NavLink>

        <NavLink
          to='/categoria/otros'
          className={'button category-nav-link'}
        >
          Otros
        </NavLink>
      </nav>
    </>
  )
}