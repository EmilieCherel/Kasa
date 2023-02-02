import styled from 'styled-components';
import colors from '../utils/style/colors';
import { Link } from 'react-router-dom';

const CardWrapper = styled.div`
  position: relative;
  margin: 30px;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  background: ${colors.primary}
    linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`;

const CardTitle = styled.span`
  font-sixe: 18px;
  color: white;
  word-wrap: break-word;
  position: absolute;
  width: 50%;
  left: 5%;
  bottom: 10%;
`;

const CardCover = styled.img`
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

function Card({ id, title, cover }) {
  return (
    <Link to={`/${id}`}>
      <CardWrapper>
        <CardCover src={cover} alt="Photo de la location" />
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </Link>
  );
}

export default Card;
