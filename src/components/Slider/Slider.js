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

  function handleContextMenu() {
    return false;
  }

  return (
    <div className={`popup-image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup-image__container">
        <div className="popup-image__slider">
          <div className="arrow arrow-left" onClick={handlSliderClickPrev}></div>
          <img className={nextClass} src={props.card.link} alt={props.card.tag} onContextMenu={handleContextMenu} />
          <div className="arrow arrow-right" onClick={handlSliderClickNext}></div>
        </div>
        <span className="close" onClick={props.onClose}></span>
      </div>
    </div>
  );
}

export default Slider;
