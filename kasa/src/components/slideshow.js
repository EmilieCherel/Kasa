import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { logements } from '../data/logements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import '../style/components/slideShow.css';

function Slideshow() {
  const { housingId } = useParams();

  let logement = [];
  logement = logements.find((element) => element.id === housingId);

  const [current, setCurrent] = useState(0);
  const length = logement.pictures.length;

  const nextPicture = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevPicture = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slideContainer">
      {length > 1 && (
        <div>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prevPicture}
            style={{
              position: 'absolute',
              top: '45%',
              left: '5%',
              fontSize: '3rem',
              color: 'white',
              zIndex: '2',
            }}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={nextPicture}
            style={{
              position: 'absolute',
              top: '45%',
              right: '5%',
              fontSize: '3rem',
              color: 'white',
              zIndex: '2',
            }}
          />
        </div>
      )}

      {logement.pictures.map((picture, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img className="slidePicture" src={picture} alt="logement" />
            )}
          </div>
        );
      })}
      <p className="bulletPoints">
        {current + 1}/{logement.pictures.length}
      </p>
    </section>
  );
}

export default Slideshow;
