import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Harmonesens</h3>
            <p>Conseil Conjugal et Familial</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Contact</h4>
              <p>contact@harmonesens.fr</p>
              <p>06 XX XX XX XX</p>
            </div>
            <div className="footer-section">
              <h4>Horaires</h4>
              <p>Lundi - Vendredi</p>
              <p>9h - 19h</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Harmonesens. Tous droits réservés.</p>
          <p className="footer-note">Les consultations sont strictement confidentielles</p>
        </div>
      </div>
    </footer>
  )
}
