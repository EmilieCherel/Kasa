import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../style/components/header.css';

function Header() {
  return (
    <nav className="navContainer">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo Kasa" />
        </Link>
      </div>
      <div className="linkContainer">
        <Link
          to="/"
          className="styledLink"
          style={{ textDecorationLine: 'underline' }}
        >
          Accueil
        </Link>
        <Link to="/a-Propos" className="styledLink">
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
