import '../assets/css/Website.scss';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

const AboutSection = styled.section`
  padding: 4rem 0;
  
  .about-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: #52afcc;
    text-align: center;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }
  
  .profile-summary {
    background: #f8f9fa;
    padding: 3rem;
    border-radius: 10px;
    margin-bottom: 3rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    h2 {
      color: #333;
      font-size: 1.8rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .title {
      text-align: center;
      font-size: 1.3rem;
      color: #52afcc;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      text-align: justify;
    }
  }
  
  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    
    .expertise-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #52afcc;
      
      h3 {
        color: #333;
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }
      
      ul {
        list-style: none;
        padding: 0;
        
        li {
          padding: 0.3rem 0;
          font-size: 1rem;
          color: #666;
          
          &:before {
            content: "→ ";
            color: #52afcc;
            font-weight: bold;
          }
        }
      }
    }
  }
  
  .career-timeline {
    background: #e3f2fd;
    padding: 2rem;
    border-radius: 8px;
    
    h3 {
      text-align: center;
      color: #333;
      margin-bottom: 1.5rem;
      font-size: 1.6rem;
    }
    
    .timeline-item {
      margin-bottom: 1.5rem;
      padding-left: 1rem;
      border-left: 3px solid #52afcc;
      
      .year {
        font-weight: 600;
        color: #52afcc;
        font-size: 1.1rem;
      }
      
      .role {
        font-weight: 600;
        color: #333;
        margin: 0.5rem 0;
      }
      
      .description {
        color: #666;
        font-size: 0.95rem;
      }
    }
  }
`;

function About() {
  return (
    <div className='about-page'>
      <Helmet>
        <title>About - Ricardo Zein</title>
      </Helmet>
      <AboutSection>
        <div className='about-container'>
          <h1>About Ricardo Zein</h1>
          
          <div className='profile-summary'>
            <h2>Ricardo Zein</h2>
            <div className='title'>Team Manager | DevOps Specialist | Strategic Project Leader</div>
            <p>
              Experienced technology professional with over 20 years in software development, 
              team management, and strategic operations. Currently serving as a Team Manager 
              specializing in DevOps, Go-to-Market strategies, and complex project coordination 
              from Porto, Portugal.
            </p>
            <p>
              My career spans from hands-on development to executive leadership, combining 
              technical expertise with strategic business acumen. I maintain active involvement 
              in coding while leading cross-functional teams and driving organizational growth 
              through innovative technology solutions.
            </p>
          </div>
          
          <div className='expertise-grid'>
            <div className='expertise-card'>
              <h3>Team Management & Leadership</h3>
              <ul>
                <li>Cross-functional team coordination</li>
                <li>Agile methodology implementation</li>
                <li>Performance optimization</li>
                <li>Strategic planning and execution</li>
                <li>Mentoring and development</li>
              </ul>
            </div>
            
            <div className='expertise-card'>
              <h3>DevOps & Infrastructure</h3>
              <ul>
                <li>CI/CD pipeline design</li>
                <li>Cloud infrastructure management</li>
                <li>Automation and monitoring</li>
                <li>Security best practices</li>
                <li>Scalability optimization</li>
              </ul>
            </div>
            
            <div className='expertise-card'>
              <h3>Technical Development</h3>
              <ul>
                <li>Full-stack web development</li>
                <li>PHP & WordPress (since 2007)</li>
                <li>Modern JavaScript frameworks</li>
                <li>Database design and optimization</li>
                <li>API development and integration</li>
              </ul>
            </div>
            
            <div className='expertise-card'>
              <h3>Strategic Operations</h3>
              <ul>
                <li>Go-to-Market strategy development</li>
                <li>Complex project management</li>
                <li>Business process optimization</li>
                <li>Stakeholder communication</li>
                <li>Risk assessment and mitigation</li>
              </ul>
            </div>
          </div>
          
          <div className='career-timeline'>
            <h3>Career Evolution</h3>
            <div className='timeline-item'>
              <div className='year'>2001-2007</div>
              <div className='role'>Front-end Developer</div>
              <div className='description'>Started career in web development, specializing in user interfaces and client-side technologies</div>
            </div>
            <div className='timeline-item'>
              <div className='year'>2007-2008</div>
              <div className='role'>PHP & WordPress Specialist</div>
              <div className='description'>Expanded into server-side development, becoming proficient in PHP and WordPress ecosystem</div>
            </div>
            <div className='timeline-item'>
              <div className='year'>2008-2015</div>
              <div className='role'>Team Coordinator & Product Manager</div>
              <div className='description'>Transitioned into leadership roles while maintaining technical involvement</div>
            </div>
            <div className='timeline-item'>
              <div className='year'>2015-Present</div>
              <div className='role'>Head of Operations & Team Manager</div>
              <div className='description'>Leading strategic initiatives, DevOps transformation, and complex project delivery from Porto, Portugal</div>
            </div>
          </div>
        </div>
      </AboutSection>
    </div>
  );
}

export default About;
