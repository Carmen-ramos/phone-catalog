import logo from "../images/soamee.png";
// import "../stylesheets/Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Soamee logo image" />
      <h2>Phone Catalog</h2>
    </header>
  );
}

export default Header;
