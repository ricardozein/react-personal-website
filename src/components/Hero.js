import "../assets/css/Website.scss";
import heroImage from "../assets/images/profile_porto_3.jpg";
/** @jsx jsx */ import { css, jsx } from "@emotion/core";

function Hero() {
  return (
    <div
      className="Hero"
      css={css`
        align-items: flex-end;
        background: url(${heroImage}) no-repeat 50% 80% / cover;
        display: flex;
        justify-content: center;
        min-height: 75vh;
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
        `}
      >
        Hey, I'm
        <strong
          css={css`
            text-transform: uppercase;
            font-style: normal;
            font-size: 3.5rem;
            font-weight: bold;
          `}
        >
          Ricardo Zein
        </strong>
      </h1>
    </div>
  );
}

export default Hero;
