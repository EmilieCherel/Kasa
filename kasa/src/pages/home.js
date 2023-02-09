import { logements } from '../data/logements';
import HomeBanner from '../components/homeBanner';
import Card from '../components/card';
import '../style/pages/home.css';

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <HomeBanner />
        <div className="homeGallery">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
