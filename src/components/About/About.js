import React from 'react';

import me from '../../images/light/Me.svg';
import zoom from '../../images/light/icons8-расширить-25.png';
import SiteList from '../SiteList/SiteList';

function About(props) {

  function onOpenClick() {
    props.openPhoto();
  }

  return (
    <section className="about">
      <div className="about__block promo__block">
        <div className="about__img-container">
          <img className="about__img promo__img" src={me} alt="workplace"></img>
          <img className="about__zoom" src={zoom} alt="zoom" onClick={onOpenClick} title="open a photo"></img>
        </div>

        <p className="about__info">
          My name is Stafeeva Natalia.<br></br>
          I'm a vector Illustrator with 3 years background
        </p>
      </div>
      <h3 className="about__title">Some of my works usage</h3>
      <SiteList />
      <p className="about__afterwords">
        I really like minimal design, if like too, let me know
      </p>
    </section>
  );
}

export default About;
