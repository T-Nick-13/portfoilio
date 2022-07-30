import React from 'react';

import logoPath from '../../images/Video.svg';

function About() {

  return (
    <section className="about">

      <div className="about__container">
        <img className="about__photo" alt="photo" src={logoPath}></img>
        <div className="about__info">
          <h1 className="about__name">Natalya Stafeeva</h1>
          <p className="about__location">Saint-Petersburg, Russia</p>
          <p className="about__specialization">Illustration</p>
        </div>
      </div>

      <div className="about__container2">

      <div className="about__general">
        <h1 className="about__header">About</h1>
        <p className="about__paragraph">Hello! I'm an Illustrater with 2 years
        background and more than 3 hundreds vectors sold. My works are applied
        in advertisement, site, presentation and so on</p>
      </div>

      <div className="about__contacts">
        <h1 className="about__header">You can contact me</h1>
        <p className="about__paragraph"><span className="about__contact-type">email:</span> natalya-stafeeva@mail.ru</p>
        <p className="about__paragraph"><span className="about__contact-type">instagram: </span>
          <a className="about__link link" href="https://www.instagram.com/natalyastafeeva" target="_blank">natalyastafeeva</a>
        </p>
      </div>

      </div>

    </section>
  );
}

export default About;
