import React from 'react';

function Slider(props) {

  const [prevClass, setPrevClass] = React.useState(true);

  function handlSliderClickNext() {

    /* setTimeout(() => {
      setPrevClass(false)
    }, 300); */

    setTimeout(() => {
      setPrevClass(true)
    }, 100);

    setPrevClass(false)

    props.onNextClick();
  }

  function handlSliderClickPrev() {
    props.onPrevClick();
  }

  const cardType = props.card === undefined ? props.nextCard : props.card;


  //const imgClassPrev = props.prevCard == undefined ? 'popup-image__picture' : 'popup-image__picture_active';
  const imgClassCurrent = props.card && prevClass ? 'popup-image__picture_active' : 'popup-image__picture';

 // const imgClassNext = props.nextCard ? 'popup-image__picture_active' : 'popup-image__picture';

  //debugger

  return (
    <div className={`popup-image ${cardType ? 'popup_opened' : ''}`}>
      <div className="popup-image__container">
        <div className="popup-image__slider">
          <div className="arrow arrow-left" onClick={handlSliderClickPrev}></div>
          {/* <img className={imgClassPrev} src={cardType.link} alt={cardType.tag} /> */}
          <img className={imgClassCurrent} src={cardType.link} alt={cardType.tag} />
          {/* <img className={imgClassNext} src={cardType.link} alt={cardType.tag} /> */}
          <div className="arrow arrow-right" onClick={handlSliderClickNext}></div>
        </div>
        <span className="close" onClick={props.onClose}></span>
      </div>
    </div>
  );
}

export default Slider;
