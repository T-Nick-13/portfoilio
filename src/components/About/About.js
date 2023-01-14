import React from 'react';

import me from '../../images/light/Me.svg';

function About() {

  return (
    <section className="about">
      <div className="about__block promo__block">
        <img className="about__img promo__img" src={me} alt="workplace"></img>
        <p className="about__info">
          Hello!<br></br>
          My name is Natalia.<br></br>
          I'm a vector Illustrater with<br></br>
          <b>3 years</b> background and more than<br></br>
          <b>3 000 Illustrations</b> sold.<br></br>
          My works are applied in<br></br>
          advertisement, websites,<br></br>
          presentation and so on:)
        </p>
      </div>
      <p className="about__afterwords">
        If you need beautiful modern<br></br>
        vector design, just let me know:)
      </p>


    </section>
  );
}

export default About;
