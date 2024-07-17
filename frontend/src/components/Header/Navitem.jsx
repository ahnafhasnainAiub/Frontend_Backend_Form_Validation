import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NavItem = ({ title }) => {
  return (
    <div className="flex gap-2 group children-visible">
      <div>{title}</div>
      <div>
        <FontAwesomeIcon icon={faArrowRight} className="text-blue-500" />
      </div>
    </div>
  );
};

export default NavItem;
