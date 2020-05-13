import "../assets/css/Website.scss";
import heroImage from "../assets/images/profile_porto_3.jpg";
/** @jsx jsx */ import { css, jsx } from "@emotion/core";

function Hero() {
  return (
    <div
      className="Hero"
      css={css`
        align-items: flex-end;
        background: url(${heroImage}) no-repeat center bottom / cover fixed;
        display: flex;
        justify-content: center;
        min-height: 80vh;
        @media (max-width: 768px) {
          align-items: flex-start;
        }
      `}
    >
      <h1
        className="Hero__greetings"
        css={css`
          color: #ffffff;
          display: flex;
          font-size: 2rem;
          flex-direction: column;
          text-align: center;
          text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);
          position: relative;
          left: -12vw;
          top: -4vh;
          font-family: "Raleway", sans-serif;
          @media (max-width: 768px) {
            left: 0;
            top: 5vh;
            font-size: 1.5rem;
            width: 80vw;
          }
        `}
      >
        Hi! I'm
        <strong
          css={css`
            text-transform: uppercase;
            font-style: normal;
            font-size: 3.5rem;
            font-weight: bold;
            @media (max-width: 768px) {
              font-size: 2.5rem;
            }
          `}
        >
          Ricardo Zein
        </strong>
      </h1>
    </div>
  );
}

export default Hero;
