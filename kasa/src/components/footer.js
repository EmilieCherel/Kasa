import Logo from '../assets/FooterLogo.png';
import '../style/components/footer.css';

function Footer() {
  return (
    <div className="footerWrapper">
      <img className="footerLogo" src={Logo} alt="Logo Kasa" />
      <span className="footerSubtitle">© 2020 Kasa. All rights reserved</span>
    </div>
  );
}

export default Footer;
