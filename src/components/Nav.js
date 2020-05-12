import React from 'react';
import '../assets/css/Website.scss';

function Nav() {
  return (
    <nav className="main-nav">
      <div className="col">
        <h1 className="main-nav__logo">Ricardo <strong>Zein</strong></h1>
      </div>
      <div className="col">
        <ul className="main-nav__list">
          <li className="navigation__item">About</li>
          <li className="navigation__item">Contact</li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;
