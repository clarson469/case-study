import React from 'react';
import './style.css';

export default (props) => {
  const navControlAttr = {
    id: 'nav-control',
    className: 'no-outline ' + (props.isOpen ? 'active' : ''),
    onClick: _ => props.navControlClick()
  };
  return (
    <button {...navControlAttr}>
      <span></span>
    </button>
  );
};
