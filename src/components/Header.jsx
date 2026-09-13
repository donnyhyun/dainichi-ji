import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/visit', 'Visit'],
  ['/teachings', 'Teachings'],
  ['/calendar', 'Calendar'],
  ['/about', 'About'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">大</span>
        <span>Dainichi-ji</span>
      </Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <span></span><span></span>
      </button>
      <nav className={`main-nav ${open ? 'is-open' : ''}`}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <span className="nav-divider" />
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </nav>
    </header>
  )
}
