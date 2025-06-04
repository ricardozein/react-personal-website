<template>
  <div id="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="profile-section">
          <img src="/profile.jpg" alt="Ricardo Zein" class="profile-image" />
          <div class="profile-info">
            <h1 class="name">Ricardo Zein</h1>
            <p class="current-version">v{{ currentVersion }} - Senior Solutions Architect</p>
            <div class="location">
              <span>📍 Porto, Portugal</span>
              <span>🇧🇷 São Paulo, Brazil</span>
            </div>
            <a href="mailto:ricardozein@gmail.com" class="email-link">
              ricardozein@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Changelog -->
    <main class="main">
      <div class="container">
        <div class="changelog-header">
          <h2>Career Changelog</h2>
          <p>20+ years of engineering web platforms at scale</p>
        </div>

        <div class="versions">
          <div 
            v-for="version in versions" 
            :key="version.version"
            class="version-card"
          >
            <div class="version-header">
              <span class="version-number">{{ version.version }}</span>
              <span class="version-date">{{ version.date }}</span>
              <span class="version-type" :class="version.type">{{ version.typeLabel }}</span>
            </div>
            
            <h3 class="version-title">{{ version.title }}</h3>
            <p class="version-description">{{ version.description }}</p>

            <div class="changes">
              <div v-if="version.added.length" class="change-section">
                <h4 class="change-title">✨ Added</h4>
                <ul class="change-list">
                  <li v-for="item in version.added" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div v-if="version.improved.length" class="change-section">
                <h4 class="change-title">🚀 Improved</h4>
                <ul class="change-list">
                  <li v-for="item in version.improved" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div v-if="version.personal.length" class="change-section">
                <h4 class="change-title">🎯 Personal</h4>
                <ul class="change-list">
                  <li v-for="item in version.personal" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Current Status -->
        <div class="current-status">
          <h3>Current Status</h3>
          <div class="status-grid">
            <div class="status-item">
              <span class="status-label">Role</span>
              <span class="status-value">Independent contractor</span>
            </div>
            <div class="status-item">
              <span class="status-label">Location</span>
              <span class="status-value">Portugal</span>
            </div>
            <div class="status-item">
              <span class="status-label">Focus</span>
              <span class="status-value">Enterprise Solutions Architecture</span>
            </div>
            <div class="status-item">
              <span class="status-label">Availability</span>
              <span class="status-value">Open to new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </main>

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
  data() {
    return {
      currentVersion: '5.2.1',
      versions: [
        {
          version: 'v5.2.1',
          date: '2024-Present',
          type: 'current',
          typeLabel: 'Current',
          title: 'Senior Solutions Architect @ AirFleet',
          description: 'Leading global technical teams and architecting enterprise solutions for international tech company.',
          added: [
            'Global team leadership across multiple time zones',
            'Enterprise WordPress & headless CMS architectures',
            'AI-driven automation and intelligent form systems',
            'Advanced marketing automation (GTM, HubSpot, Marketo)'
          ],
          improved: [
            'Async collaboration methodologies',
            'Complex platform scalability solutions',
            'Client onboarding and technical consultation',
            'Architecture documentation and best practices'
          ],
          personal: [
            'Expanded fountain pen collection (Sailor Professional Gear Slim)',
            'Deepened appreciation for Japanese design aesthetics',
            'Continued Dave Matthews Band concert attendance',
            'Vintage gaming exploration (Chrono Trigger mastery)'
          ]
        },
        {
          version: 'v5.0.0',
          date: '2018-2024',
          type: 'major',
          typeLabel: 'Major Release',
          title: 'Solutions Architect & Team Leadership Era',
          description: 'Transition from hands-on development to architecture and team management roles.',
          added: [
            'Solutions architecture expertise',
            'Team management skills',
            'Client relationship management',
            'Technical consultation capabilities'
          ],
          improved: [
            'Enterprise-level system design',
            'Remote team collaboration',
            'Project delivery methodologies',
            'Technical documentation standards'
          ],
          personal: [
            'Moved to Portugal with family',
            'Continued lifelong guitar passion (playing since age 16)',
            'Developed interest in vintage watches (Vostok collection)',
            'Embraced European football culture (maintained Palmeiras loyalty)'
          ]
        },
        {
          version: 'v4.0.0',
          date: '2010-2018',
          type: 'major',
          typeLabel: 'Major Release',
          title: 'Senior Developer & Technical Leadership',
          description: 'Advanced to senior technical roles with increasing responsibility and team leadership.',
          added: [
            'Advanced PHP and JavaScript frameworks',
            'Database architecture and optimization',
            'Code review and mentoring processes',
            'Technical project planning'
          ],
          improved: [
            'Full-stack development capabilities',
            'Performance optimization techniques',
            'Security implementation standards',
            'Agile development practices'
          ],
          personal: [
            'Started family (wife and three children)',
            'Discovered fountain pen collecting',
            'Developed love for cyberpunk literature (Gibson trilogy)',
            'Began exploring Brazilian and international literature'
          ]
        },
        {
          version: 'v3.0.0',
          date: '2005-2010',
          type: 'major',
          typeLabel: 'Major Release',
          title: 'Full-Stack Web Developer',
          description: 'Evolved into comprehensive web development with modern frameworks and methodologies.',
          added: [
            'Modern JavaScript frameworks',
            'CSS preprocessors and advanced styling',
            'Version control systems (Git)',
            'Testing and deployment automation'
          ],
          improved: [
            'Cross-browser compatibility expertise',
            'Responsive design implementation',
            'User experience optimization',
            'Performance monitoring and optimization'
          ],
          personal: [
            'Moved from São Paulo to explore new opportunities',
            'Developed passion for Dave Matthews Band',
            'Started reading Neil Gaiman works',
            'Explored international cuisine and culture'
          ]
        },
        {
          version: 'v2.0.0',
          date: '2003-2005',
          type: 'major',
          typeLabel: 'Major Release',
          title: 'Professional Web Developer',
          description: 'Transitioned from learning to professional development work with established practices.',
          added: [
            'Professional development workflows',
            'Client communication skills',
            'Project management basics',
            'Quality assurance processes'
          ],
          improved: [
            'HTML/CSS mastery',
            'PHP programming proficiency',
            'Database design skills',
            'Problem-solving methodologies'
          ],
          personal: [
            'Established São Paulo as professional base',
            'Became dedicated Palmeiras supporter',
            'Started exploring vintage videogames',
            'Developed appreciation for Brazilian literature classics'
          ]
        },
        {
          version: 'v1.0.0',
          date: '2001-2003',
          type: 'initial',
          typeLabel: 'Initial Release',
          title: 'Web Development Journey Begins',
          description: 'First steps into web development, learning fundamentals and building first websites.',
          added: [
            'HTML and CSS fundamentals',
            'Basic PHP programming',
            'MySQL database basics',
            'Web hosting and FTP knowledge'
          ],
          improved: [
            'Computer literacy',
            'Internet understanding',
            'Basic design principles',
            'Technical problem solving'
          ],
          personal: [
            'Born and raised in São Paulo, Brazil',
            'Started playing acoustic guitar at age 16',
            'Discovered passion for technology',
            'Started building first websites',
            'Began lifelong learning journey'
          ]
        }
      ]
    }
  }
}
</script>