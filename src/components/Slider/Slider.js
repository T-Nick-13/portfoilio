import React from 'react';
import SlickSilder from "react-slick";
import Card from '../Card/Card';
import SliderArrow from '../SliderArrow/SliderArrow';

function Slider(props) {

  const sliderRef = React.useRef();

  React.useEffect(() => {
    sliderRef.current.slickGoTo(props.pic.indexOf(props.card));
  }, [props.card])

  return (
    <div className={`popup-image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup-image__container">

            <SlickSilder
              focusOnSelect={true}
              ref={sliderRef}
              nextArrow={
                <SliderArrow
                  arrowContainerClass="arrow__container_right"
                  arrowClass="arrow-right"
              />}
              prevArrow={
                  <SliderArrow
                  arrowContainerClass="arrow__container_left"
                  arrowClass="arrow-left"
              />}
            >
              {props.pic.map((card) =>{
                return (
                  <Card
                    sliderImgClass="slider__img"
                    card={card}
                    key={card._id}
                   />
                )
              })}
            </SlickSilder>

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
