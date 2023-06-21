import React from 'react';
import Promo from '../Promo/Promo';
import CardList from '../CardList/CardList';
import promoImg from '../../images/light/promo.png';
import { rows } from '../../utils/constants';

function Main(props) {
  const menuBtnClass = props.clickedTag ? 'filter__btn_active' : '';

  return (

    <main className="main">
      <Promo imgSrc={promoImg}>
      <div className="main__promo-box">
        <p className="main__promo-text">
          Hello !<br/>
          Here you can find modern<br/>
          illustrations from a graphic<br/>
          designer with a 3-year<br/>
          background
        </p>
      </div>
      </Promo>
      <a name="works" id="works"></a>{/* for smooth scroll */}
      <div className="main__pictures">
        <h2 className="main__heading">Welcome to Stafeeva.site !</h2>
        <CardList
          onCardClick={props.handleCardClick}
          rowClass='main__img-row'
          rows={rows}
        />
      </div>
    </main>



  );

}


export default Main;
