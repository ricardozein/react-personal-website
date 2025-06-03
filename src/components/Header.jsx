import "../assets/css/Website.scss";
import Nav from "./Nav.jsx";

function Header() {
  return (
    <header className='top-header'>
      <div className='top-header__container container'>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
