import Sparkle from '../components/Sparkle.jsx'
import './Services.css'

const services = [
  {
    label: 'A',
    name: 'Website Design',
    text: 'Clean, mobile-friendly websites built around what your visitors need to do.',
  },
  {
    label: 'B',
    name: 'Brand Identity',
    text: 'Logo, colors and fonts that reflect your story, kept simple and consistent.',
  },
  {
    label: 'C',
    name: 'Sustainable Hosting',
    text: 'We help you host your site on green servers that run on renewable energy.',
  },
  {
    label: 'D',
    name: 'Growth Support',
    text: 'Ongoing updates and small improvements so your site keeps working for you.',
  },
]

function Services() {
  return (
    <>
      <section className="services-intro">
        <span className="services-bigword script-word">thrive</span>
        <Sparkle className="services-sparkle" />

        <div className="container intro-content">
          <span className="tag">What We Offer</span>
          <h1>Simple services, real results</h1>
          <p className="services-text">
            We keep our service list short on purpose — every project gets our
            full attention.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container service-grid">
          {services.map((s) => (
            <div className="service-card" key={s.name}>
              <div className="service-label">{s.label}</div>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
