import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const cards = [
  { icon: '⌂', title: 'Visit', text: 'Plan a quiet visit to the temple grounds.', to: '/visit' },
  { icon: '◌', title: 'Teachings', text: 'Timeless ideas for everyday life.', to: '/teachings' },
  { icon: '♢', title: 'Events', text: 'Seasonal gatherings and temple life.', to: '/calendar' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow">Dainichi-ji · Tokushima</p>
          <h1>Stillness<br />begins here.</h1>
          <p className="hero-copy">A temple, a path, a moment to pause.</p>
          <Link className="button" to="/visit">Visit the Temple <span>→</span></Link>
        </div>
        <div className="hero-ornament">静</div>
      </section>

      <section className="quick-links">
        {cards.map((card) => (
          <Link className="quick-card" to={card.to} key={card.title}>
            <div className="quick-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <span className="arrow">→</span>
          </Link>
        ))}
      </section>

      <section className="intro split-section">
        <div className="image-frame sample-temple" />
        <div className="split-copy">
          <p className="eyebrow">A place of practice</p>
          <h2>Come for the temple.<br /><em>Stay for the stillness.</em></h2>
          <p>Dainichi-ji is presented here as a calm digital doorway into temple life in Tokushima. The site can grow into a complete guide to visiting, history, teachings, seasonal events and pilgrimage.</p>
          <Link className="text-link" to="/about">Discover the temple <span>↗</span></Link>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <blockquote>Walk slowly.<br />Notice what is already here.</blockquote>
        <p>— A simple invitation to begin</p>
      </section>

      <section className="features page-section">
        <SectionHeading
          eyebrow="Explore"
          title="A few places to begin"
          text="The structure is intentionally simple, with room to add real temple information and photography later."
        />
        <div className="feature-grid">
          <Link to="/visit" className="feature-card feature-large">
            <div className="feature-image garden-image" />
            <div><span className="eyebrow">01 · Visit</span><h3>Before you arrive</h3><p>Hours, access, etiquette and a gentle guide to the grounds.</p></div>
          </Link>
          <Link to="/teachings" className="feature-card">
            <div className="feature-image bell-image" />
            <div><span className="eyebrow">02 · Teachings</span><h3>Ideas for daily life</h3><p>Short reflections designed to be read slowly.</p></div>
          </Link>
          <Link to="/calendar" className="feature-card">
            <div className="feature-image path-image" />
            <div><span className="eyebrow">03 · Calendar</span><h3>Season by season</h3><p>Gatherings, observances and moments worth returning for.</p></div>
          </Link>
        </div>
      </section>
    </>
  )
}
