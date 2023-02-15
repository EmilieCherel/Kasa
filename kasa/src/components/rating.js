import EmptyStarImg from '../assets/EmptyStar.png';
import FullStarImg from '../assets/FullStar.png';
import '../style/components/rating.css';

function Rating({ rating }) {
  const emptyStars = Array(5).fill(
    <img src={EmptyStarImg} alt="Etoile vide" />
  );
  const fullStars = Array(5).fill(
    <img src={FullStarImg} alt="Etoile remplie" />
  );

  return (
    <div>
      {fullStars.slice(5 - rating).map((fullStar, index) => {
        return (
          <img
            key={fullStar + index}
            src={FullStarImg}
            alt="Etoile remplie"
            className="ratingStar"
          />
        );
      })}
      {emptyStars.slice(rating).map((emptyStar, index) => {
        return (
          <img
            key={emptyStar + index}
            src={EmptyStarImg}
            alt="Etoile vide"
            className="ratingStar"
          />
        );
      })}
    </div>
  );
}

export default Rating;
