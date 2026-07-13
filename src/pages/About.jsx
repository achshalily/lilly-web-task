import Lily from '../components/Lily.jsx'
import './About.css'

function About() {
  return (
    <>
      <section className="about-intro">
        <span className="about-bigword script-word">bloom</span>
        <Lily className="about-lily" />

        <div className="container intro-content">
          <span className="tag">About Lily</span>
          <h1>Design that lifts people up</h1>
          <p className="intro-text">
            Lily is a women-led web design studio. We started Lily to give small
            businesses, student founders and community projects the same quality
            of website that big companies get — without the big price tag or the
            environmental cost.
          </p>
        </div>
      </section>

      <section className="mv-section">
        <div className="container mv-grid">
          <div className="mv-box">
            <span className="tag">Mission</span>
            <p>To build simple, accessible websites that help changemakers and small
            businesses grow, while keeping our own footprint light.</p>
          </div>
          <div className="mv-box">
            <span className="tag">Vision</span>
            <p>A web design industry where more women and first-time founders have
            the tools and confidence to build their own online presence.</p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <span className="tag">Why Choose Us</span>
          <h2>Reasons clients stay with Lily</h2>

          <ul className="why-list">
            <li>Every project is led by a woman designer or developer, start to finish.</li>
            <li>We design lightweight sites that load fast and use less energy to run.</li>
            <li>Clear, honest pricing — no hidden costs added after the project starts.</li>
            <li>We explain our process in plain language, not technical jargon.</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default About
