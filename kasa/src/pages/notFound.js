import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../utils/style/colors';

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorTitle = styled.h1`
  width: 597px;
  height: 263px;
  color: ${colors.primary};
  font-weight: 700;
  font-size: 288px;
  margin: 30px;
  line-height: 411px;
  align: center;
  display: flex;
  align-items: center;
  text-align: center;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 500;
  font-size: 36px;
  color: ${colors.primary};
  padding-bottom: 50px;
  display: flex;
`;

const LinkToHome = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primary};
  display: flex;
  padding-top: 80px;
  text-decoration-line: underline;
`;

function NotFound() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <LinkToHome to="/">Retourner sur la page d'accueil</LinkToHome>
    </ErrorWrapper>
  );
}

export default NotFound;
