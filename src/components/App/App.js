import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import About from '../About/About';
import ContactForm from '../ContactForm/ContactForm';
import PopupResult from '../PopupResult/PopupResult';
import PhotoPopup from '../PhotoPopup/PhotoPopup';
import Usage from '../Usage/Usage';
import Diversity from '../Diversity/Diversity';

function App() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [inSend, setInSend] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [photoIsOpened, setPhotoIsOpened] = useState(false);

  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;

  const handleCardClick = useCallback((card) => {
    setSelectedCard(card);
    document.body.classList.add('body_unscrolled');
  }, [selectedCard]);

  const handlePopupClose = useCallback(() => {
    setSelectedCard(0);
    setPhotoIsOpened(false);
    document.body.classList.remove('body_unscrolled');
  }, [selectedCard]);

  const closePopupResult = useCallback(() => {
    setIsSent(false);
  }, [isSent]);

  const sendEmail = useCallback((data) => {
    setInSend(true);
    emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, data, REACT_APP_PUBLIC_KEY)
      .then(() => {
        setInSend(false);
        setIsSent(true);
      }, (error) => {
        console.log(error.text);
        setIsSent(false);
        setInSend(false);
      });
  }, [inSend]);

  const openPhoto = useCallback(() => {
    setPhotoIsOpened(true);
  }, [photoIsOpened]);

  useEffect(() => {
    function handleEscClose(e) {
      if (e.key === 'Escape') {
        handlePopupClose();
        closePopupResult();
      }
    }
    function handleOverlayClose(e) {
      if (e.target.classList.contains('popup_opened') || e.target.classList.contains('slick-track')) {
        handlePopupClose();
      }
      if (e.target.className === 'popupResult') {
        closePopupResult();
      }
    }
    document.addEventListener('keyup', handleEscClose);
    document.addEventListener('click', handleOverlayClose);
  }, []);

  const location = useLocation();

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Main
              /* pic={mainCards} */
              handleCardClick={handleCardClick}
            />
            <Footer />
          </Route>

          <Route exact path="/about">
            <About
              openPhoto={openPhoto}
            />
          </Route>

          <Route exact path="/usage">
            <Usage
              handleCardClick={handleCardClick}
            />
          </Route>

          <Route exact path="/contact">
            <ContactForm
              sendEmail={sendEmail}
              inSend={inSend}
              isSent={isSent}
            />
          </Route>

          <Route exact path="/diversity">
            <Diversity />
          </Route>

        </Switch>

        <Slider
          card={selectedCard}
          onClose={handlePopupClose}
        />
        <PopupResult
          isSent={isSent}
          closePopup={closePopupResult}
        />
        <PhotoPopup
          onClose={handlePopupClose}
          isOpened={photoIsOpened}
        />
      </div>
    </div>
  );
}

export default App;
