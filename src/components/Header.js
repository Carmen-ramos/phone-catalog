import logo from "../images/soamelogo.png";
import image from "../images/soamee.png";
import "../stylesheets/Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Soamee logo image" />
      <img className="header__img2" src={image} alt="Soamee logo image" />
      <h2 className="header__title">Phone Catalog</h2>
    </header>
  );
}

export default Header;
