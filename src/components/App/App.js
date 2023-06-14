import React from 'react';
import { Route, Switch } from 'react-router-dom';
import emailjs from '@emailjs/browser';
require('dotenv').config();

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import About from '../About/About';
import ContactForm from '../ContactForm/ContactForm';
import PopupResult from '../PopupResult/PopupResult';
import PhotoPopup from '../PhotoPopup/PhotoPopup';
import Usage from '../Usage/Usage';

import { MAIN_API } from '../../utils/config';
import Api from '../../utils/Api';

function App() {

  const [selectedCard, setSelectedCard] = React.useState(0);
  const [allCards, setAllCards] = React.useState([]);
  const [mainCards, setMainCards] = React.useState([]);
  const [inSend, setInSend] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);
  const [photoIsOpened, setPhotoIsOpened] = React.useState(false);

  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;

 /*  const api = new Api ({
    baseUrl: MAIN_API,
    headers: {
      'Content-Type': 'application/json'
    },
  });

  React.useEffect(() => {
    Promise.all([
      api.getCards()
    ])
    .then(([data]) => {
      localStorage.setItem('cards', JSON.stringify(data));
      const cards = JSON.parse(localStorage.getItem('cards')).sort(function(a, b){
        return a.index-b.index
      });
      setAllCards(cards);
      setMainCards(cards.filter((i) => i.mainPage === true));
    })
    .catch((err) => {
      console.log(err);
    })
  }, []) */

  function handleCardClick(card) {
    setSelectedCard(card);
    document.body.classList.add('body_unscrolled');
  }

  function handlePopupClose() {
    setSelectedCard(0);
    setPhotoIsOpened(false);
    document.body.classList.remove('body_unscrolled');
  }

  function closePopupResult() {
    setIsSent(false);
  }

  function sendEmail(data) {
    setInSend(true);
    emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, data, REACT_APP_PUBLIC_KEY)
    .then((result) => {
      setInSend(false);
      setIsSent(true);
    }, (error) => {
        console.log(error.text);
        setIsSent(false);
        setInSend(false);
    });
  }

  function openPhoto() {
    setPhotoIsOpened(true);

  }

  React.useEffect(() => {

    function handleEscClose(e) {
      if (e.key === 'Escape') {
        handlePopupClose();
        closePopupResult();
      }
    }
    function handleOverlayClose (e) {
      if (e.target.classList.contains('popup_opened') || e.target.classList.contains('slick-track')) {
        handlePopupClose();
      }
      if (e.target.className == 'popupResult') {
        closePopupResult();
      }
    }
    document.addEventListener('keyup', handleEscClose);
    document.addEventListener('click', handleOverlayClose);
  }, [])

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header
        />
        <Switch>
          <Route exact path="/">
            <Main
              pic={mainCards}
              handleCardClick={handleCardClick}
            />
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

        </Switch>
        {/* <Footer /> */}
        <Slider
          card={selectedCard}
          onClose={handlePopupClose}
          pic={location.pathname === '/works' ? allCards : mainCards}
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
