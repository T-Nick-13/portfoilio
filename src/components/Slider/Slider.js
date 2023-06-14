import React from 'react';
import { useLocation } from 'react-router-dom';
import SlickSilder from "react-slick";
import SliderArrow from '../SliderArrow/SliderArrow';
import { rows, usageRows } from '../../utils/constants';

function Slider(props) {

  const sliderRef = React.useRef();
  const { pathname } = useLocation();

  function getImages() {
    const imgArr = [];
    const array = pathname === '/usage' ? usageRows : rows;
    array.forEach((i) => {
      i.row.forEach((el) => {
        if (el.src) {
          imgArr.push({ src: el.src, src_m: el.src_m, src_l: el.src_l });
        }
      })
    })
    console.log(array[0].row[0].src_l)
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
            />
          }
          prevArrow={
            <SliderArrow
              arrowContainerClass="arrow__container_left"
              arrowClass="arrow-left"
            />
          }
        >
          {getImages().map((card, index) =>{
            return (
              <picture key={index}>
                <source className="slider__img" media="(min-width: 768px)" srcSet={card.src_l}></source>
                <source className="slider__img" media="(max-width: 767px)" srcSet={card.src_m}></source>
                <img className='slider__img' src={card.src} alt="Изображение"></img>
              </picture>
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
