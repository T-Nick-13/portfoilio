import React from 'react';

function Slider(props) {

  function handlSliderClickNext() {
    props.onNextClick();
  }

  function handlSliderClickPrev() {
    props.onPrevClick();
  }

  function handleContextMenu() {
    return false;
  }

  return (
    <div className={`popup-image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup-image__container">
        <div className="popup-image__slider">
          <div className="arrow__container arrow__container_left" onClick={handlSliderClickPrev}>
            <div className="arrow arrow-left" ></div>
          </div>
          <img className="popup-image__picture" src={props.card.link} alt={props.card.tag}
            onContextMenu={handleContextMenu} />
          <div className="arrow__container arrow__container_right" onClick={handlSliderClickNext}>
            <div className="arrow arrow-right"></div>
          </div>
        </div>
        <button className="popup__close-btn btn-cross" type="button" onClick={props.onClose}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" x2="100" y1="0" y2="100" />
            <line x1="0" x2="100" y1="100" y2="0" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;
