import logo from "../images/soamee.png";
// import "../stylesheets/Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Soamee logo image" />
    </header>
  );
}

export default Header;
