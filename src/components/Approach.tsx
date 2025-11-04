import './Approach.css'

export default function Approach() {
  return (
    <section className="approach">
      <div className="approach-container">
        <h2>Mon Approche</h2>
        <div className="approach-content">
          <div className="approach-values">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Écoute Bienveillante</h3>
              <p>
                Un espace sans jugement où vous pouvez vous exprimer librement et en toute confidentialité.
              </p>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Approche Personnalisée</h3>
              <p>
                Chaque accompagnement est unique et adapté à votre situation, vos besoins et votre rythme.
              </p>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Outils Concrets</h3>
              <p>
                Des méthodes éprouvées et des exercices pratiques pour vous aider à avancer vers vos objectifs.
              </p>
            </div>
          </div>
          <div className="approach-info">
            <div className="info-box">
              <h3>Informations Pratiques</h3>
              <div className="info-item">
                <strong>Durée des séances</strong>
                <p>1h à 1h30</p>
              </div>
              <div className="info-item">
                <strong>Fréquence</strong>
                <p>Selon vos besoins, généralement toutes les 2 à 3 semaines</p>
              </div>
              <div className="info-item">
                <strong>Modalités</strong>
                <p>En cabinet ou en visioconférence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
