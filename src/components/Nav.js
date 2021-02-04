import "../assets/css/Website.scss";
import { Link } from "react-router-dom";
/** @jsx jsx */ import { css, jsx } from "@emotion/core";

function Nav() {
  const navStyle = {
    color: "#ffffff",
  };

  return (
    <nav className='main-nav'>
      <div className='col'>
        <Link
          to='/'
          css={css`
            &:hover {
              text-decoration: none;
            }
          `}
        >
          <h1 className='main-nav__logo'>
            Ricardo <strong>Zein</strong>
          </h1>
        </Link>
      </div>
      {/* <div className="col">
        <ul className="main-nav__list">
          <Link style={navStyle} to="/about">
            <li className="navigation__item">About</li>
          </Link>
          <Link style={navStyle} to="/contact">
            <li className="navigation__item">Contact</li>
          </Link>
        </ul>
      </div> */}
    </nav>
  );
}

export default Nav;
