import './Services.css'

export default function Services() {
  const services = [
    {
      title: "Thérapie de Couple",
      description: "Accompagnement pour surmonter les difficultés, améliorer la communication et retrouver la complicité au sein du couple.",
      icon: "💑"
    },
    {
      title: "Médiation Familiale",
      description: "Espace de dialogue pour résoudre les conflits familiaux dans le respect et la bienveillance de chacun.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Conseil Parental",
      description: "Soutien dans votre rôle de parent pour mieux comprendre et accompagner vos enfants à chaque étape de leur développement.",
      icon: "🤱"
    },
    {
      title: "Gestion des Transitions",
      description: "Accompagnement lors des moments clés de la vie: séparation, recomposition familiale, deuil ou changements importants.",
      icon: "🌱"
    }
  ]

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Mes Accompagnements</h2>
        <p className="services-intro">
          Un accompagnement personnalisé pour répondre à vos besoins spécifiques
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
