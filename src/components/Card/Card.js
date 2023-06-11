import React from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

function Card(props) {

  function handlCardClick() {
    if (!props.sliderImgClass && props.card.src) {
     props.onCardClick(props.card);
    }
  }

  const cardClass = props.card.prop ? props.card.prop : '';
  const sourceClass = !props.sliderImgClass && props.card.src ? ' card_layout' : '';

  return (
    <div
      className={`card ${cardClass}${sourceClass}`}
      onClick={handlCardClick}
    >
      {
        props.card.src ?
          <>
            <img
              src={props.card.src}
              alt='picture'
              className={`card__img ${props.sliderImgClass ? props.sliderImgClass : ''}`}
            />
            {props.card?.text}
          </>

        : props.card.text ?  props.card.text : props.card.text
      }

      <div className={`card__overlay${!props.card.src || props.sliderImgClass ? ' card__overlay_inactive' : ''}`}>
        <div>
        <HiOutlineMagnifyingGlass size={30} color="fff"/>
        </div>
      </div>
    </div>
  );
}

export default Card;
