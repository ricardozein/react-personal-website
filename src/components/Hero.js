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
          text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.6);
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
            &:before {
              content: "___";
              display: inline-block;
              position: absolute;
              transform: translateY(50%);
              top: -21%;
              left: -28%;
            }
            &:after {
              content: "___";
              display: inline-block;
              position: absolute;
              transform: translateY(50%);
              top: -21%;
              right: -28%;
            }
            @media (max-width: 768px) {
              font-size: 2.5rem;
              &:before {
                display: none;
              }
              &:after {
                display: none;
              }
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
