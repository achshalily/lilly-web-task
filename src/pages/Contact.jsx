import { useState } from 'react'
import Lily from '../components/Lily.jsx'
import './Contact.css'

function Contact() {
  // one object holds all 4 form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    setSent(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <section className="contact-intro">
        <span className="contact-bigword script-word">reach</span>
        <Lily className="contact-lily" />

        <div className="container intro-content">
          <span className="tag">Contact</span>
          <h1>Let's build something together</h1>
          <p>Fill the form below and we'll get back to you soon.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary">Send Message</button>

            {sent && <p className="success-msg">Thanks! Your message has been sent.</p>}
          </form>

          <div className="contact-details">
            <h3>Our Address</h3>
            <p>Lily Design Studio<br />444, Tirunelveli<br />TamilNadu 627006</p>

            <h3>Email</h3>
            <p>achshhaliilyy@gmail.com</p>

            <h3>Phone</h3>
            <p>+91 92444 44222</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
