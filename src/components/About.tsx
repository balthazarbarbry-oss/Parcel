import './About.css'

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Bienvenue</h2>
          <p>
            Je suis conseillère conjugale et familiale, et je vous accueille dans un cadre
            confidentiel et bienveillant. Mon approche se fonde sur l'écoute active et le
            non-jugement pour vous accompagner dans vos questionnements.
          </p>
          <p>
            Que vous traversiez des difficultés dans votre couple, des tensions familiales
            ou que vous cherchiez simplement à mieux communiquer, je suis là pour vous guider
            vers un mieux-être relationnel.
          </p>
          <p>
            Ensemble, nous explorerons vos besoins et vos ressources pour retrouver l'harmonie
            et construire des relations plus épanouissantes.
          </p>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="180" fill="var(--soft-sage)" opacity="0.2"/>
              <circle cx="200" cy="200" r="140" fill="var(--muted-rose)" opacity="0.2"/>
              <circle cx="200" cy="200" r="100" fill="var(--sage-green)" opacity="0.2"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
