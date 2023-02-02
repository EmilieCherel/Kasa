import styled from 'styled-components';
import AboutBannerImg from '../assets/AboutBanner.png';

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutBanner = styled.img`
  border-radius: 25px;
`;

function About() {
  return (
    <AboutWrapper>
      <AboutBanner src={AboutBannerImg} />
    </AboutWrapper>
  );
}

export default About;
