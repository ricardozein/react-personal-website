import React from "react";
import "../assets/css/Website.scss";
import Hero from "../components/Hero";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

const AboutMe = styled.article`
  padding: 3rem 0;
  width: 100%;

  .inner {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 3rem;
      font-weight: 600;
      color: #52afcc;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    .innerText {
      max-width: 45rem;
      font-size: 1.3rem;

      p {
        text-align: center;
      }
    }
  }
`;

function Home() {
  return (
    <div className='homepage'>
      <Helmet>
        <title>Ricardo Zein</title>
      </Helmet>
      <Hero />
      <AboutMe>
        <div className='container'>
          <div className='row inner'>
            <h2>About Me</h2>
            <div className='innerText'>
              <p>
                I've been working as a developer since 2001 and built my career
                starting as a front-end professional. PHP and WordPress are part
                of my daily work since 2007. In 2008 I began coordinating teams,
                managing products, and finally became Head of Operations. I
                never gave up on coding, though.
              </p>

              <p>
                Currently, I'm working as a Team Manager remotely from Porto,
                Portugal.
              </p>

              <p>
                If you would like to get in touch, the best place to find me is
                <a href='https://www.linkedin.com/in/ricardozein/'>
                  {" "}
                  LinkedIn.
                </a>
              </p>
            </div>
          </div>
        </div>
      </AboutMe>
    </div>
  );
}

export default Home;
