import AboutBannerImg from '../assets/AboutBanner.png';
import AboutBannerImgMobile from '../assets/AboutBannerMobile.png';
import Collapse from '../components/collapse';
import '../style/pages/about.css';

function About() {
  return (
    <div className="aboutWrapper">
      <picture>
        <source
          media="(max-width:400px)"
          srcSet={`${AboutBannerImgMobile} 336w`}
        />
        <source media="(min-width:401px)" srcSet={`${AboutBannerImg} 1240w`} />
        <img
          src={AboutBannerImg}
          alt="Paysage"
          className="aboutBannerImgContainer"
        />
      </picture>
      <div className="collapseWrapper">
        <Collapse label="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse label="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse label="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>
        <Collapse label="Responsabilité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  );
}

export default About;
