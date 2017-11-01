import React from 'react';
import './style.css';

export default (props) => {
  const heroAttr = {
    id: 'hero-bg',
    role: 'img',
    "aria-label": 'bookcase',
    style: {
      backgroundImage: "url('https://drive.google.com/uc?export=view&id=0B7FP4AigbxhAdlZOOGtweHEwNzQ')",
      backgroundSize: "cover",
      backgroundPositionX: 0,
      backgroundPositionY: props.top,
      backgroundRepeat: "no-repeat"
    }
  };
  return <div {...heroAttr}></div>;
};
