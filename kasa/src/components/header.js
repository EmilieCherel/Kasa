import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from '../utils/style/styledLink';
import Logo from '../assets/Logo.png';

const NavContainer = styled.nav`
  padding: 40px 100px;
  display: flex;
  flex-direction: colonne;
  justify-content: space-between;
  align-items: center;
`;

const KasaLogo = styled.img``;

const LinkContainer = styled.div`
  display: flex;
`;

function Header() {
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <KasaLogo src={Logo} />
        </Link>
      </div>
      <LinkContainer>
        <StyledLink to="/" style={{ textDecorationLine: 'underline' }}>
          Accueil
        </StyledLink>
        <StyledLink to="/a-Propos">A Propos</StyledLink>
      </LinkContainer>
    </NavContainer>
  );
}

export default Header;
