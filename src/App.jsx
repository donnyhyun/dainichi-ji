import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Visit from './pages/Visit'
import Teachings from './pages/Teachings'
import Calendar from './pages/Calendar'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/teachings" element={<Teachings />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <section className="page-section centered-page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="button" to="/">Return home <span>→</span></Link>
    </section>
  )
}
