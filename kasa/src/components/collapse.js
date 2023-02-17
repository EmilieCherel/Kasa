import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/components/collapse.css';

function Collapse(props) {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split('/');

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        splitLocation[1] === 'a-Propos' ? 'aboutCollapse' : 'housingCollapse'
      }
    >
      <button className="collapseButton" onClick={() => setIsOpen(!isOpen)}>
        {props.label}
        {!isOpen && <FontAwesomeIcon icon={faChevronDown} />}
        {isOpen && <FontAwesomeIcon icon={faChevronUp} />}
      </button>
      {isOpen && <div className="collapseContent">{props.children}</div>}
    </div>
  );
}

export default Collapse;
