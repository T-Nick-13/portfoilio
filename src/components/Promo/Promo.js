import React from 'react';

function Promo(props) {
  return (
    <div className="promo">
      <div className="promo__container">
        <img className="promo__img" src={props.imgSrc} alt="people" />
        <div className="promo__overlay" />
        {props.children}
      </div>
    </div>
  );
}

export default Promo;
