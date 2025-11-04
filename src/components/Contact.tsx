import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Prendre Rendez-vous</h2>
          <p className="contact-description">
            N'hésitez pas à me contacter pour toute question ou pour convenir d'un premier rendez-vous.
            Je vous répondrai dans les plus brefs délais.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="detail-icon">📧</div>
              <div>
                <strong>Email</strong>
                <p>contact@harmonesens.fr</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-icon">📞</div>
              <div>
                <strong>Téléphone</strong>
                <p>06 XX XX XX XX</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-icon">📍</div>
              <div>
                <strong>Cabinet</strong>
                <p>Sur rendez-vous uniquement</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
