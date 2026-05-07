import './App.css'

const Squiggle = ({ color = '#6b9fd4', style = {}, width = 80, height = 400 }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path
      d={`M${width/2} 0 C${width*0.9} ${height*0.1}, ${width*0.1} ${height*0.2}, ${width/2} ${height*0.35} C${width*0.9} ${height*0.5}, ${width*0.1} ${height*0.65}, ${width/2} ${height*0.8} C${width*0.85} ${height*0.9}, ${width*0.2} ${height*0.95}, ${width/2} ${height}`}
      stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"
    />
  </svg>
)

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-name">Rae Welch</span>
        <span className="navbar-divider">·</span>
        <span className="navbar-status">
          <span className="status-dot"></span>
          Currently open to work
        </span>
      </div>
      <div className="navbar-right">
        <a href="#work" className="nav-link">Work</a>
        <a href="#about" className="nav-link">About</a>
        <a href="mailto:rae@example.com" className="nav-cta">Get in touch</a>
      </div>
      <button className="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}

function Hero() {
  return (
    <>
      {/* White top strip: big gold title */}
      <section className="hero-top">
        <div className="hero-top-inner">
          <h1 className="hero-title">Hi I'm Rae</h1>
          <p className="hero-subtitle">Let me help you…[insert multiple lines]</p>
        </div>
      </section>

      {/* Navy block: tagline left + cards right */}
      <section className="hero-navy">
        <div className="hero-navy-inner">
          <div className="hero-navy-left">
            <h2 className="hero-tagline">I'm a creative problem solver with a knack for those knotty problems</h2>
            <p className="hero-bio">
              I'm a curious, thoughtful designer-researcher who brings structure, calm and a lot of joy to complex spaces. I help teams untangle problems, understand users and make sense of the mess, so we can turn insight into action and build things that really work.
            </p>
          </div>
          <div className="hero-navy-right">
            <div className="info-card pink">
              <h4>Senior UX/UR Consultant</h4>
              <p>Using the best of both to create truly meaningful experiences</p>
            </div>
            <div className="info-card white">
              <h4>9 years</h4>
              <p>Experience across both private and public industries, working on complex projects — all with real project experiences.</p>
            </div>
            <div className="info-card yellow">
              <div className="tools-tag">Tools</div>
              <div className="tools-list">Figma, Adobe, Miro, Lucid, Trello, JIRA</div>
              <p>I'm adaptable and quick to get up to speed with new tools as projects require.</p>
            </div>
            <div className="info-card pink">
              <h4>London raised, NZ born</h4>
              <p>A cross-cultural perspective to help shape that different way to think about things.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FeaturedWork() {
  const projects = [
    {
      title: 'Service design meets user research to power smarter decisions.',
      desc: '',
      bg: 'pink-bg',
      hasLink: true,
    },
    {
      title: 'Turning complexity into clarity, with users at the heart',
      desc: '',
      bg: 'blue-bg',
      hasLink: true,
    },
    {
      title: 'Helping the team understand users in a major digital transformation',
      desc: '',
      bg: 'green-bg',
      hasLink: true,
    },
    {
      title: 'Designing trust, clarity and curiosity into a first-time investing app',
      desc: '',
      bg: 'peach-bg',
      hasLink: true,
    },
  ]

  return (
    <section className="work-section" id="work">
      <div className="work-inner">
        <div className="section-label">Featured work</div>

        <div className="work-top">
          <div className="work-intro">
            <h3>Explored with curiosity, shaped by insight</h3>
            <p>Helping teams ask better questions and build smarter answers that make a real difference.</p>
          </div>
          <div className="work-intro">
            <p style={{fontSize:'0.78rem',color:'var(--text-light)',lineHeight:1.6}}>
              My experience<br /><br />
              I've led research and design across justice, education and housing. I guide strategy, navigate change and support teams with clarity.<br /><br />
              Each project strengthens how I work.
            </p>
          </div>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <div className="work-card" key={i}>
              <div className={`work-card-img ${p.bg}`}></div>
              <h3>{p.title}</h3>
              {p.hasLink && <a href="#" className="learn-more">Learn more</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="values-section">
      <div className="values-bg"></div>
      <div className="values-inner">
        <div>
          <p className="values-role">Me as a designer</p>
          <div className="values-list">
            <div className="value-item">I care about solving meaningful problems</div>
            <div className="value-item">Quick to pick up context, proactive about learning more</div>
            <div className="value-item">Known for my organisation</div>
            <div className="value-item">I share insights in a way people can actually use and act on</div>
          </div>
        </div>
        <div className="values-right">
          <a href="#" className="arrow-link">What I'm like to work with &nbsp;→</a>
        </div>
      </div>
    </section>
  )
}


function Testimonials() {
  const testimonials = [
    {
      text: "Rae's organisation skills and attention to detail are second to none. I always have her playbooks inspired.",
      author: "Heather M",
      role: "Senior Lead Researcher – Multiply projects portfolio"
    },
    {
      text: "She has led by example... Her professionalism, grace, no ego mindset, and business first approach are exemplary.",
      author: "Eva M",
      role: "Experience Design & Service Design Consultant Lead"
    },
    {
      text: "It's a dream when working on projects and we get someone with your kind of drive and approach. Rae manages things that come up with her, but always with attention.",
      author: "Luke S",
      role: "Lead Project Manager – Multiply"
    },
    {
      text: "She has led by example... Her professionalism, grace, no ego mindset, and business first approach are exemplary.",
      author: "Eva M",
      role: "Experience Design & Service Design Consultant"
    },
    {
      text: "I really appreciate everything Rae does. I've not seen a bad piece of work or advice from her!",
      author: "Luke B",
      role: "User Research Opportunities Lead"
    },
    {
      text: "Rae is a great ambassador for how to do UX in busy spaces. She not only employs the best side of ethics in everything that she does, but she is also super at bringing people together.",
      author: "James M",
      role: "Senior Designer – Coliseum Because (Ltd)"
    },
    {
      text: "She has led by example... Her professionalism, grace, no ego mindset, and business first approach are exemplary.",
      author: "Eva M",
      role: "Experience Design & Service Design Design"
    },
    {
      text: "Thanks so much for all your hard work and scrupulous attention to detail on Jerry Lane's behalf. We simply we could not have got this far without you.",
      author: "Cordelia R",
      role: "Project Manager – Jerry Lane Charity"
    },
  ]

  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="section-label">What others say?</div>
        <div style={{marginBottom:'2rem'}}></div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p>"{t.text}"</p>
              <div className="testimonial-author">{t.author}</div>
              <div className="testimonial-role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <div className="section-label">What do you want to do next?</div>
        <div className="cta-grid">
          <a href="#about" className="cta-card">
            <h3>Learn more about me</h3>
          </a>
          <a href="#work" className="cta-card">
            <h3>See my work</h3>
          </a>
          <a href="#" className="cta-card">
            <h3>See my CV</h3>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-name">Rae Welch</div>
          <p className="footer-bio">
            I'm a curious, thoughtful designer-researcher who brings structure, calm and a lot of joy to complex spaces. I help teams untangle problems, understand users and make sense of the mess, so we can turn insight into action and build things that really work.
          </p>
        </div>
        <div>
          <div className="footer-links">
            <a href="mailto:rae@example.com" className="footer-link">Get in touch</a>
            <a href="#work" className="footer-link">Work</a>
            <a href="#about" className="footer-link">About</a>
          </div>
          <div className="footer-copy">© 2024 Rae Welch</div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Values />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App