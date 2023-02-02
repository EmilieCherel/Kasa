import styled from 'styled-components';
import { logements } from '../data/logements';
import HomeBanner from '../components/homeBanner';
import Card from '../components/card';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContainer = styled.div``;

const HomeGallery = styled.div`
  margin: 40px 0px;
  padding: 30px 20px;
  background: #f7f7f7;
  border-radius: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeBanner />
        <HomeGallery>
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </HomeGallery>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
