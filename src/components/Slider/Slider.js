import React from 'react';
import SlickSilder from "react-slick";
import Card from '../Card/Card';
import SliderArrow from '../SliderArrow/SliderArrow';
import { rows } from '../../utils/constants';

function Slider(props) {

  const sliderRef = React.useRef();

  function getImages() {
    const imgArr = [];
    rows.forEach((i) => {
      i.row.forEach((el) => {
        if (el.src) {
          imgArr.push({ src: el.src });
        }
      })
    })
    return imgArr;
  }

  React.useEffect(() => {
    sliderRef.current.slickGoTo(getImages().findIndex((i) => i.src === props.card.src));
  }, [props.card])

  return (
    <div className={`popup-image ${props.card ? 'popup_opened' : ''}`} style={{paddingRight: 17 +'px'}}>
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
              {getImages().map((card, index) =>{
                return (
                  <Card
                    sliderImgClass="slider__img"
                    card={card}
                    key={index}
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
