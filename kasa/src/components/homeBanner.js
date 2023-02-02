import styled from 'styled-components';
import HomeBannerImg from '../assets/HomeBanner.png';

const HomeBannerWrapper = styled.div`
  position: relative;
`;

const HomeBannerImgContainer = styled.img`
  filter: brightness(70%);
  border-radius: 25px;
`;

const HomeTitle = styled.h1`
  position: absolute;
  left: 20%;
  top: 20%;
  font-size: 48px;
  font-weight: 500;
  color: white;
`;

function HomeBanner() {
  return (
    <HomeBannerWrapper>
      <HomeBannerImgContainer src={HomeBannerImg} />
      <HomeTitle>Chez vous, partout et ailleurs</HomeTitle>
    </HomeBannerWrapper>
  );
}

export default HomeBanner;
