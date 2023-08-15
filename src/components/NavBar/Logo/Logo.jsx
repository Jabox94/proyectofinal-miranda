import { Link } from 'react-router-dom'
import './Logo.css'

export default function Logo() {
  return (
    <div className="logo w-full">
      <Link to="/">
        <h3 className='logo-title'>I want it</h3>
      </Link>
    </div>
  )
}