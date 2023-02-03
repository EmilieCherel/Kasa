import styled from 'styled-components';
import AboutBannerImg from '../assets/AboutBanner.png';
import Collapse from '../components/collapse';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutBanner = styled.img`
  border-radius: 25px;
`;

function About() {
  return (
    <AboutWrapper>
      <AboutBanner src={AboutBannerImg} />
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
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </Collapse>
    </AboutWrapper>
  );
}

export default About;
