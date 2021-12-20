import React from 'react';

function Slider(props) {

  const [nextClass, setNextClass] = React.useState('popup-image__picture_active');

  function handlSliderClickNext() {
    setNextClass('popup-image__picture_next');
    setTimeout(() => {
      setNextClass('popup-image__picture_active');
    });
    props.onNextClick();
  }

  function handlSliderClickPrev() {
    setNextClass('popup-image__picture_prev');
    setTimeout(() => {
      setNextClass('popup-image__picture_active');
    });
    props.onPrevClick();
  }

  const cardType = props.card === undefined ? props.nextCard : props.card;

  return (
    <div className={`popup-image ${cardType ? 'popup_opened' : ''}`}>
      <div className="popup-image__container">
        <div className="popup-image__slider">
          <div className="arrow arrow-left" onClick={handlSliderClickPrev}></div>
          <img className={nextClass} src={cardType.link} alt={cardType.tag} />
          <div className="arrow arrow-right" onClick={handlSliderClickNext}></div>
        </div>
        <span className="close" onClick={props.onClose}></span>
      </div>
    </div>
  );
}

export default Slider;
