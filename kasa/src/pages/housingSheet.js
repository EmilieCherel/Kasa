import { useParams } from 'react-router-dom';
import { logements } from '../data/logements';
import Collapse from '../components/collapse';
import Slideshow from '../components/slideshow';
import NotFound from './notFound';
import Rating from '../components/rating';
import '../style/pages/housingSheet.css';

function HousingSheet() {
  const { housingId } = useParams();
  const logement = logements.find((element) => element.id === housingId);
  return logement === undefined ? (
    <NotFound />
  ) : (
    <div className="housingSheetWrapper">
      <div className="housingSheetContainer">
        <Slideshow />
        <div className="housingSheetTitleTagHostRating">
          <div className="housingSheetTitleTag">
            <h1 className="housingSheetTitle">{logement.title}</h1>
            <h2 className="housingSheetSubtitle">{logement.location}</h2>
            <div className="housingTagWrapper">
              {logement.tags.map((tag, index) => (
                <span className="housingTag" key={tag + index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="housingHostRating">
            <div className="housingHost">
              <span className="housingHostName">{logement.host.name}</span>
              <img
                src={logement.host.picture}
                alt="Propriétaire du logement"
                className="housingHostPicture"
              />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className="collapseContainer">
          <Collapse label="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse label="Équipements">
            <ul className="equipmentsList">
              {logement.equipments.map((equipment, index) => (
                <li key={equipment + index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default HousingSheet;
