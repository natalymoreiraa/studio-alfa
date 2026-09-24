import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img
            className="logo-icon"
            src="..\..\src\assets\imgs\Alfa-Romeo-Logo.png"
            alt="Logo"
          />
          <span className="logo text">Studio Alfa</span>
        </div>
        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Serviços</a>
          <a href="#">Sobre</a>
          <a href="#" className="btn-contatos">
            contatos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
