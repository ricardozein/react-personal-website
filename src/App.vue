<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-brand">RZ</div>
        <div class="nav-links">
          <a href="#about" class="nav-link">About</a>
          <a href="#expertise" class="nav-link">Expertise</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Ricardo Zein</h1>
        <p class="hero-subtitle">Senior Solutions Architect</p>
        <p class="hero-description">
          Crafting enterprise solutions with 20+ years of expertise
        </p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">Get in touch</a>
          <a href="#about" class="btn btn-secondary">Learn more</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-image-wrapper">
          <img src="/profile.jpg" alt="Ricardo Zein" class="hero-image" />
          <div class="hero-decoration"></div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
      <div class="container">
        <h2 class="section-title">About</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="lead">
              I'm a Senior Solutions Architect based in Porto, Portugal, originally from São Paulo, Brazil. 
              With over two decades of experience, I specialize in transforming complex business challenges 
              into elegant technical solutions.
            </p>
            <p>
              Currently leading global teams at AirFleet, I architect enterprise-level solutions that scale. 
              My expertise spans from high-complexity WordPress implementations to modern headless architectures, 
              always with a focus on performance, security, and user experience.
            </p>
            <p>
              Beyond technology, I'm a devoted family man, an acoustic guitar enthusiast (playing since 16), 
              and a collector of fountain pens and vintage timepieces. My love for craftsmanship extends from 
              code to the analog world.
            </p>
          </div>
          <div class="about-details">
            <div class="detail-item">
              <span class="detail-label">Location</span>
              <span class="detail-value">Porto, Portugal</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Origin</span>
              <span class="detail-value">São Paulo, Brazil</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Experience</span>
              <span class="detail-value">20+ years</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Focus</span>
              <span class="detail-value">Enterprise Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section id="expertise" class="section expertise">
      <div class="container">
        <h2 class="section-title">Expertise</h2>
        <div class="expertise-grid">
          <div class="expertise-card">
            <div class="expertise-icon">⚡</div>
            <h3>Solutions Architecture</h3>
            <p>Designing scalable enterprise systems that align business goals with technical excellence.</p>
          </div>
          <div class="expertise-card">
            <div class="expertise-icon">🌐</div>
            <h3>Global Team Leadership</h3>
            <p>Leading distributed teams across time zones with async collaboration methodologies.</p>
          </div>
          <div class="expertise-card">
            <div class="expertise-icon">🚀</div>
            <h3>Platform Development</h3>
            <p>Building high-performance web platforms with modern frameworks and best practices.</p>
          </div>
          <div class="expertise-card">
            <div class="expertise-icon">🔧</div>
            <h3>Technical Consulting</h3>
            <p>Providing strategic guidance for digital transformation and technology adoption.</p>
          </div>
          <div class="expertise-card">
            <div class="expertise-icon">📊</div>
            <h3>Marketing Automation</h3>
            <p>Integrating GTM, HubSpot, and Marketo for data-driven marketing solutions.</p>
          </div>
          <div class="expertise-card">
            <div class="expertise-icon">🤖</div>
            <h3>AI Integration</h3>
            <p>Implementing intelligent automation and AI-driven form systems.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2024 - Present</div>
            <div class="timeline-content">
              <h3>Senior Solutions Architect</h3>
              <h4>AirFleet</h4>
              <p>Leading global technical teams and architecting enterprise solutions for international operations.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2018 - 2024</div>
            <div class="timeline-content">
              <h3>Solutions Architect & Team Lead</h3>
              <h4>Various Companies</h4>
              <p>Transitioned from hands-on development to architecture and team management roles.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2010 - 2018</div>
            <div class="timeline-content">
              <h3>Senior Developer</h3>
              <h4>Multiple Organizations</h4>
              <p>Advanced to senior technical roles with increasing responsibility and team leadership.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2001 - 2010</div>
            <div class="timeline-content">
              <h3>Web Developer</h3>
              <h4>Various Companies</h4>
              <p>Built foundation in web development, evolving from junior to full-stack developer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Section -->
    <section class="section personal">
      <div class="container">
        <h2 class="section-title">Beyond Code</h2>
        <div class="interests-grid">
          <div class="interest-item">
            <h4>Literature</h4>
            <p>Cyberpunk classics, Brazilian literature, and Neil Gaiman's imaginative worlds</p>
          </div>
          <div class="interest-item">
            <h4>Music</h4>
            <p>26 years of acoustic guitar, Dave Matthews Band enthusiast</p>
          </div>
          <div class="interest-item">
            <h4>Collecting</h4>
            <p>Fountain pens (Sailor, Kaweco) and vintage Soviet watches</p>
          </div>
          <div class="interest-item">
            <h4>Gaming</h4>
            <p>Vintage games enthusiast, particularly JRPGs like Chrono Trigger</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title">Let's Connect</h2>
        <div class="contact-content">
          <p class="contact-intro">
            I'm always interested in discussing new opportunities, innovative projects, 
            or simply connecting with fellow professionals.
          </p>
          <div class="contact-info">
            <a href="mailto:ricardozein@gmail.com" class="contact-link">
              <span class="contact-icon">✉</span>
              ricardozein@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/ricardozein" target="_blank" rel="noopener noreferrer" class="contact-link">
              <span class="contact-icon">💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Ricardo Zein. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}
</script>