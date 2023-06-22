import React from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { BsLink45Deg } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function Card(props) {

  function handlCardClick(e) {
    if (!props.sliderImgClass && props.card.src &&
      !e.target.classList.contains('card__icon') &&
      !e.target.classList.contains('card__overlay-link') &&
      !e.target.parentElement.classList.contains('card__icon')) {
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
            <LazyLoadImage
              height={'100%'}
              effect="opacity"
              src={props.card.src}
              width={'100%'}
              alt="picture"
              className={`card__img ${props.sliderImgClass ? props.sliderImgClass : ''}`}
            />
            {props.card?.text}
          </>

        : props.card.text ?  props.card.text : props.card.text
      }

      <div className={`card__overlay${!props.card.src || props.sliderImgClass ? ' card__overlay_inactive' : ''}`}>
        <div className="card__overlay-icon" title="zoom">
          <HiOutlineMagnifyingGlass size={30} color="fff"/>
        </div>
        <a
          href={props.card.link}
          target="_blank"
          className={`card__overlay-icon ${props.linkActive ? props.linkClass : ' card__overlay-icon_inactive'}`}
          title="follow the link"
        >
          <BsLink45Deg size={30} color="fff" className="card__icon"/>
        </a>
      </div>
    </div>
  );
}

export default Card;
