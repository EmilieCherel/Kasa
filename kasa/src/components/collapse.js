import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CollapseWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1023px;
`;
const CollapseButton = styled.button`
  background-color: ${colors.primary};
  border-radius: 5px;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border: 0px;
  width: 100%;
  height: 50px;
`;
const CollapseContent = styled.div`
  background-color: ${colors.secondary};
  border-radius: 0px 0px 5px 5px;
  color: ${colors.primary};
  font-size: 24px;
  font-weight: 400;
  padding: 10px 15px 0px;
`;

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapseWrapper>
      <CollapseButton onClick={() => setIsOpen(!isOpen)}>
        {props.label}
        <FontAwesomeIcon icon={faChevronDown} />
      </CollapseButton>
      {isOpen && <CollapseContent>{props.children}</CollapseContent>}
    </CollapseWrapper>
  );
}

export default Collapse;
