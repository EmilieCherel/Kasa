import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { logements } from '../data/logements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SlideContainer = styled.section`
position: relative
display: flex;
justify-content: center;
align-items: center;
`;

const SlidePicture = styled.img`
  width: 1240px;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;
`;

const BulletPoints = styled.p`
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 45%;
  color: white;
  font-size: 18px;
`;

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
    <SlideContainer>
      {length > 1 && (
        <div>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prevPicture}
            style={{
              position: 'absolute',
              top: '40%',
              left: '10%',
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
              top: '40%',
              right: '10%',
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
            {index === current && <SlidePicture src={picture} alt="logement" />}
          </div>
        );
      })}
      <BulletPoints>
        {current + 1}/{logement.pictures.length}
      </BulletPoints>
    </SlideContainer>
  );
}

export default Slideshow;
