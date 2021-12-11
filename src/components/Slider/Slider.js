import React from 'react';

function Slider(props) {

  function handlSliderClickNext() {
    props.onNextClick();
  }

  function handlSliderClickPrev() {
    props.onPrevClick();
  }

  const cardType = props.card === undefined ? props.nextCard : props.card;

  return (
    <div className={`popup-image ${cardType.link ? 'popup_opened' : ''}`}>
      <div className="popup-image__container">
        <div className="popup-image__slider">
          <div className="arrow arrow-left" onClick={handlSliderClickPrev}></div>
          <img className="popup-image__picture" src={cardType.link} alt={cardType.tag} />
          <div className="arrow arrow-right" onClick={handlSliderClickNext}></div>
        </div>
        <span className="close" onClick={props.onClose}></span>
      </div>
    </div>
  );
}

export default Slider;
