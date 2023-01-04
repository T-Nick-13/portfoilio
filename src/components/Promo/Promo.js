import React from 'react';
import promoPath from '../../images/light/Безымянный-6.svg';
import mouse from '../../images/light/Mouse.svg';


function Promo(props) {

  return (
    <section className="promo">
      <div className="promo__block">
      <div className="promo__container">
        <div className="promo__info">
          <h1 className="promo__info-text promo__h1">Vector Illustrations</h1>
          <h2 className="promo__info-text promo__h2">MODERN MINIMAL DESIGN</h2>
        </div>
        <div className="promo__img-container">
          <img className="promo__img" src={promoPath} alt="promo"></img>
          <img className="promo__img-mouse" src={mouse} alt="mouse"></img>
        </div>

      </div>
      </div>
    </section>
  );
}


export default Promo;
