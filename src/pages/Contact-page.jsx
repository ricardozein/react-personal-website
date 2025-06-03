import '../assets/css/Website.scss';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

const ContactSection = styled.section`
  padding: 4rem 0;
  min-height: 60vh;
  
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: #52afcc;
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  
  .contact-info {
    background: #f8f9fa;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    
    .contact-item {
      margin-bottom: 2rem;
      
      h3 {
        color: #333;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      
      p {
        font-size: 1.1rem;
        color: #666;
        margin: 0;
      }
      
      a {
        color: #52afcc;
        text-decoration: none;
        font-weight: 500;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  
  .professional-note {
    margin-top: 2rem;
    padding: 1.5rem;
    background: #e3f2fd;
    border-left: 4px solid #52afcc;
    border-radius: 5px;
    
    p {
      margin: 0;
      font-style: italic;
      color: #555;
    }
  }
`;

function Contact() {
  return (
    <div className='contact-page'>
      <Helmet>
        <title>Contact - Ricardo Zein</title>
      </Helmet>
      <ContactSection>
        <div className='contact-container'>
          <h1>Contact</h1>
          <div className='contact-info'>
            <div className='contact-item'>
              <h3>Email</h3>
              <p>
                <a href='mailto:ricardozein@gmail.com'>ricardozein@gmail.com</a>
              </p>
            </div>
            
            <div className='contact-item'>
              <h3>LinkedIn</h3>
              <p>
                <a href='https://www.linkedin.com/in/ricardozein/' target='_blank' rel='noopener noreferrer'>
                  linkedin.com/in/ricardozein
                </a>
              </p>
            </div>
            
            <div className='contact-item'>
              <h3>Location</h3>
              <p>Porto, Portugal</p>
            </div>
            
            <div className='contact-item'>
              <h3>Professional Role</h3>
              <p>Team Manager | DevOps | Go-to-Market Strategy | Complex Project Management</p>
            </div>
          </div>
          
          <div className='professional-note'>
            <p>
              Available for consulting on team management, DevOps implementation, 
              go-to-market strategies, and complex project coordination.
            </p>
          </div>
        </div>
      </ContactSection>
    </div>
  );
}

export default Contact;
