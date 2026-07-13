import { Link } from 'react-router-dom'
import Lily from '../components/Lily.jsx'
import Sparkle from '../components/Sparkle.jsx'
import './Home.css'

const features = [
  {
    number: '01',
    title: 'Sustainable by design',
    text: 'We build lightweight, efficient websites that load fast and use fewer resources.',
  },
  {
    number: '02',
    title: 'Women-led team',
    text: 'A studio founded and run by women, building tools that open doors for more women in tech.',
  },
  {
    number: '03',
    title: 'Built with you',
    text: 'We keep clients involved at every step, so the final product actually feels like yours.',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        {/* big soft script word layered behind the hero copy - the signature touch */}
        <span className="hero-bigword script-word">grow</span>
        <Sparkle className="hero-sparkle" />
        <Lily className="hero-lily" />

        <div className="container hero-content">
          <span className="tag">Web Design Studio</span>
          <h1>We build websites that empower and grow.</h1>
          <p className="hero-text">
            Lily is a small design studio helping changemakers, small businesses
            and student founders bring their ideas online — sustainably.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Start a Project</Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

      <section className="welcome">
        <div className="container welcome-row">
          <div className="welcome-label">
            <span className="tag">Welcome</span>
            <h2>A studio that grows with you</h2>
          </div>
          <blockquote className="welcome-text">
            "Whether you're launching your first idea or refreshing an old
            website, we design with care, keep things simple, and build with
            the planet and your users in mind."
          </blockquote>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <span className="tag">Why Lily</span>
          <h2>What makes us different</h2>

          <div className="feature-grid">
            {features.map((item) => (
              <div className="feature-card" key={item.title}>
                <div className="feature-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
