import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">Dainichi-ji Temple</p>
          <h2>A quiet place<br />to return to yourself.</h2>
        </div>
        <div className="footer-links">
          <Link to="/visit">Visit</Link>
          <Link to="/teachings">Teachings</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Tokushima, Japan</span>
        <span>© {new Date().getFullYear()} Dainichi-ji Temple</span>
      </div>
    </footer>
  )
}
