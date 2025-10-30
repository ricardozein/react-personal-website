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
          <a href="#personal" class="nav-link">Beyond Code</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-wrap">
        <div class="hero-content">
          <h1 class="hero-title">Ricardo Zein</h1>
          <p class="hero-subtitle">Senior Solutions Architect</p>
          <p class="hero-description">
            Designing and delivering enterprise-grade platforms, cloud architectures, and integrations for over 20 years
          </p>
          <div class="hero-cta">
            <a href="mailto:ricardo.zein@gmail.com" class="btn btn-primary">Get in touch</a>
            <a href="#about" class="btn btn-secondary">Learn more</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-portrait">
            <div class="hero-ring" aria-hidden="true"></div>
            <img src="/profile-placeholder.svg" alt="Ricardo Zein - Senior Solutions Architect" class="hero-image" loading="eager" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
      <div class="container">
        <h2 class="section-title" v-reveal>About</h2>
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
        <h2 class="section-title" v-reveal>Expertise</h2>
        <div class="expertise-grid">
          <div 
            v-for="(item, index) in expertise" 
            :key="item.title" 
            class="expertise-card"
            v-reveal="{ delay: index * 100 }"
          >
            <div class="card-icon-wrap">
              <component :is="item.icon" :size="32" :stroke-width="1.75" class="card-icon" aria-hidden="true" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <div class="container">
        <h2 class="section-title" v-reveal>Experience</h2>
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
    <section id="personal" class="section personal">
      <div class="container">
        <h2 class="section-title" v-reveal>Beyond Code</h2>
        <p class="section-subtitle" v-reveal="{ delay: 100 }">The analog things that keep me curious</p>
        <div class="interests-grid">
          <div 
            v-for="(item, index) in interests" 
            :key="item.title" 
            class="interest-card"
            v-reveal="{ delay: index * 120 }"
          >
            <div class="card-icon-wrap">
              <component :is="item.icon" :size="32" :stroke-width="1.75" class="card-icon" aria-hidden="true" />
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title" v-reveal>Let's Connect</h2>
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

<script setup>
import { Zap, Globe, Rocket, Wrench, BarChart3, Bot } from 'lucide-vue-next'
import IconBookReading from './components/icons/IconBookReading.vue'
import IconGuitarAcoustic from './components/icons/IconGuitarAcoustic.vue'
import IconPenWatch from './components/icons/IconPenWatch.vue'
import IconGamepadClassic from './components/icons/IconGamepadClassic.vue'
import { onMounted } from 'vue'
import vReveal from './directives/reveal.js'

const expertise = [
  {
    icon: Zap,
    title: 'Solutions Architecture',
    description: 'Designing scalable enterprise systems that align business goals with technical excellence.'
  },
  {
    icon: Globe,
    title: 'Global Team Leadership',
    description: 'Leading distributed teams across time zones with async collaboration methodologies.'
  },
  {
    icon: Rocket,
    title: 'Platform Development',
    description: 'Building high-performance web platforms with modern frameworks and best practices.'
  },
  {
    icon: Wrench,
    title: 'Technical Consulting',
    description: 'Providing strategic guidance for digital transformation and technology adoption.'
  },
  {
    icon: BarChart3,
    title: 'Marketing Automation',
    description: 'Integrating GTM, HubSpot, and Marketo for data-driven marketing solutions.'
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Implementing intelligent automation and AI-driven form systems.'
  }
]

const interests = [
  {
    icon: IconBookReading,
    title: 'Literature',
    description: 'Cyberpunk classics, Brazilian literature, and Neil Gaiman\'s imaginative worlds'
  },
  {
    icon: IconGuitarAcoustic,
    title: 'Music',
    description: '26 years with my acoustic companion, Dave Matthews Band on repeat'
  },
  {
    icon: IconPenWatch,
    title: 'Collecting',
    description: 'Fountain pens (Sailor, Kaweco) and vintage Soviet mechanical watches'
  },
  {
    icon: IconGamepadClassic,
    title: 'Gaming',
    description: 'Vintage game preservation, especially JRPGs like Chrono Trigger'
  }
]

onMounted(() => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
})
</script>
