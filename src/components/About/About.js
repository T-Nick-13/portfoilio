import React from 'react';
import Contacts from '../Contacts/Contacts';

import aboutImg01 from '../../images/light/aboutImg01.png';
import aboutImg01S from '../../images/light/aboutImg01_small.png';
import aboutImg02 from '../../images/light/aboutImg02.png';
import aboutPhoto01 from '../../images/light/about1.jpg';
import aboutPhoto02 from '../../images/light/about2.jpg';
import aboutPhoto03 from '../../images/light/about3.jpg';

function About() {
  return (

    <div className="about">
      <div className="dark-box about__block">
        <div className="dark-box__img-cont">
          <p className="dark-box__text about__text">
            My name is Stafeeva Natalia
            {' '}
            <br />
            I&apos;m an Illustrator with
            <br />
            3 years background
            <br />
          </p>
          <img className="dark-box__back-img dark-box__back-img_left" src={aboutImg01} alt="workplace" />
        </div>
        <img className="dark-box__back-img dark-box__back-img_small" src={aboutImg01S} alt="workplace" />
        <div className="dark-box__overlay" />
      </div>

      <div className="light-box about__block">
        <div className="light-box__img-cont">
          <p className="light-box__text about__text">
            I&apos;m a freelance
            <br />
            designer.
            <br />
            I work with two big
            <br />
            stock sites.
            <br />
            My illustrations
            <br />
            have been sold more
            <br />
            than 50,000 times
          </p>
          <img src={aboutPhoto01} alt="me" />
        </div>
        <p className="light-box__text about__text">You can find me here</p>
        <Contacts
          activeLinks={['adobe', 'shutter']}
        />
      </div>

      <div className="dark-box dark-box_small about__block">
        <div className="dark-box__img-cont dark-box__img-cont_small">
          <div>
            <img className="dark-box__photo dark-box__photo_main" src={aboutPhoto02} alt="me" />
            <img className="dark-box__photo dark-box__photo_back" src={aboutPhoto03} alt="me" />
          </div>
          <p className="dark-box__text dark-box__text_small about__text">
            In my works I
            <br />
            prefer simplicity
            {' '}
            <br />
            modernity and minimalism
            <br />
          </p>
        </div>
        <img className="dark-box__back-img dark-box__back-img_right" src={aboutImg02} alt="workplace" />
        <div className="dark-box__overlay" />
      </div>

      <div className="about__contacts">
        <p className="about__text about__text_afterward">
          Links to personal social media
          <br />
        </p>
        <Contacts
          activeLinks={['email', 'telegram', 'instagram', 'behance']}
        />
        <p className="about__text">Stay in touch:)</p>
      </div>
    </div>
  );
}

export default About;
