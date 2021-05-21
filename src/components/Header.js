import logo from "../images/soamelogo.png";
import "../stylesheets/Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Soamee logo image" />
      <h2 className="header__title">Phone Catalog</h2>
    </header>
  );
}

export default Header;
