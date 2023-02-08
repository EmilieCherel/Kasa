import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { logements } from '../data/logements';
import colors from '../utils/style/colors';
import Collapse from '../components/collapse';
import Slideshow from '../components/slideshow';
import NotFound from './notFound';

const HousingSheetWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HousingSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HousingSheetTitle = styled.h1`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 0;
`;

const HousingSheetSubtitle = styled.h2`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
`;

const HousingTagWrapper = styled.div``;

const HousingTag = styled.span`
  color: white;
  font-size: 14px;
  background: ${colors.primary};
  padding: 5px 20px;
  margin: 0px 10px 0px 0px;
  border-radius: 10px;
  width: 115px;
`;

const CollapseWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const EquipmentsList = styled.ul`
  list-style-type: none;
`;

function HousingSheet() {
  const { housingId } = useParams();
  const logement = logements.find((element) => element.id === housingId);
  return logement === undefined ? (
    <NotFound />
  ) : (
    <HousingSheetWrapper>
      <Slideshow />
      <HousingSheetContainer>
        <HousingSheetTitle>{logement.title}</HousingSheetTitle>
        <HousingSheetSubtitle>{logement.location}</HousingSheetSubtitle>
        <HousingTagWrapper>
          {logement.tags.map((tag, index) => (
            <HousingTag key={tag + index}>{tag}</HousingTag>
          ))}
        </HousingTagWrapper>
      </HousingSheetContainer>
      <CollapseWrapper>
        <Collapse label="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse label="Équipements">
          <EquipmentsList>
            {logement.equipments.map((equipment, index) => (
              <li key={equipment + index}>{equipment}</li>
            ))}
          </EquipmentsList>
        </Collapse>
      </CollapseWrapper>
    </HousingSheetWrapper>
  );
}

export default HousingSheet;
