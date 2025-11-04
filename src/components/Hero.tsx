import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Harmonesens</h1>
          <p className="hero-subtitle">Conseil Conjugal et Familial</p>
          <p className="hero-description">
            Un espace de parole bienveillant pour retrouver l'harmonie dans votre vie de couple et familiale
          </p>
          <a href="#contact" className="cta-button">
            Prendre rendez-vous
          </a>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  )
}
