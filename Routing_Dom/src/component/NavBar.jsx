import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-amber-500 p-4">
      <ul style={{ display: 'flex', gap: '16px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/product/1">Product</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar


