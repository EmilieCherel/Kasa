import { Link } from 'react-router-dom';
import '../style/components/card.css';

function Card({ id, title, cover }) {
  return (
    <Link to={`/${id}`}>
      <div className="cardWrapper">
        <img className="cardCover" src={cover} alt="Logement" />
        <h2 className="cardTitle">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
