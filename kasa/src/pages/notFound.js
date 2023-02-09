import { Link } from 'react-router-dom';
import '../style/pages/notFound.css';

function NotFound() {
  return (
    <div className="errorWrapper">
      <h1 className="errorTitle">404</h1>
      <h2 className="errorSubtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="linkToHome">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
