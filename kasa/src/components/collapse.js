import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/components/collapse.css';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapseWrapper">
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
