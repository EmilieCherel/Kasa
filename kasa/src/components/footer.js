import styled from 'styled-components';
import Logo from '../assets/FooterLogo.png';

const FooterWrapper = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.img`
  margin-top: 70px;
`;

const FooterSubtitle = styled.span`
  color: white;
  margin: 30px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterLogo src={Logo} />
      <FooterSubtitle>© 2020 Kasa. All rights reserved</FooterSubtitle>
    </FooterWrapper>
  );
}

export default Footer;
