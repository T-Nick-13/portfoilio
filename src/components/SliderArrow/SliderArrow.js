import React from 'react';

function SliderArrow(props) {
  const { onClick } = props;
  return (
    <button type="button" className={`arrow__container ${props.arrowContainerClass}`} onClick={onClick} onKeyDown={onClick}>
      <div className={`arrow ${props.arrowClass}`} />
    </button>
  );
}

export default SliderArrow;
