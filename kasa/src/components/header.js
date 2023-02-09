import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../style/components/header.css';

function Header() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav className="navContainer">
      <div className="logoContainer">
        <Link to="/">
          <img src={Logo} alt="Logo Kasa" className="logo" />
        </Link>
      </div>
      <div className="linkContainer">
        <NavLink
          to="/"
          className="styledLink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-Propos"
          className="styledLink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
