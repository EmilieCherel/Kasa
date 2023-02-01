import styled from 'styled-components';
import HomeBannerImg from '../assets/HomeBanner.png';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContainer = styled.div``;

const HomeBanner = styled.img`
  position: relative;
  filter: brightness(70%);
  border-radius: 25px;
`;

const HomeTitle = styled.h1`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: 500;
  color: white;
`;

const HomeGallery = styled.div`
  margin: 40px 0px;
  width: 1240px;
  height: 829px;
  background: #f7f7f7;
  border-radius: 25px;
`;

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeBanner src={HomeBannerImg} />
        <HomeTitle>Chez vous, partout et ailleurs</HomeTitle>
        <HomeGallery></HomeGallery>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
