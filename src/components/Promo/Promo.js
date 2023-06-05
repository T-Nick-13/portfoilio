import React from 'react';
import promo from '../../images/light/promo.png';

function Promo() {

  return (
    <div className="promo">
      <div className="promo__container">
        <img className="promo__img" src={promo} alt="people"></img>
        <div className="promo__overlay"></div>
        <div className="promo__text-box">
          <p className="promo__text">
            Hello !<br/>
            Here you can find modern<br/>
            illustrations from a graphic<br/>
            desigher with a 3-year<br/>
            background
          </p>
        </div>

      </div>
    </div>
  );
}


export default Promo;
