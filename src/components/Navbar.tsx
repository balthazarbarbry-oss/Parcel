import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Harmonesens
        </div>
        <ul className="navbar-menu">
          <li><a onClick={() => scrollToSection('about')}>À propos</a></li>
          <li><a onClick={() => scrollToSection('services')}>Accompagnements</a></li>
          <li><a onClick={() => scrollToSection('approach')}>Approche</a></li>
          <li><a onClick={() => scrollToSection('contact')} className="nav-cta">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
