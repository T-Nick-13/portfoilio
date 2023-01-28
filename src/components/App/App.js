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
import CardList from '../CardList/CardList';
import PhotoPopup from '../PhotoPopup/PhotoPopup';

import { MAIN_API } from '../../utils/config';
import Api from '../../utils/Api';


function App() {

  const [selectedCard, setSelectedCard] = React.useState(0);
  const [allCards, setAllCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [mainCards, setMainCards] = React.useState([]);
  const [clickedTag, setClickedTag] = React.useState(false);
  const [inSend, setInSend] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);
  const [photoIsOpened, setPhotoIsOpened] = React.useState(false);


  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;

  const api = new Api ({
    baseUrl: MAIN_API,
    headers: {
      'Content-Type': 'application/json'
    },
  });

  React.useEffect(() => {
    Promise.all([
      api.getCards()
    ])
    .then(([cards]) => {
      localStorage.setItem('cards', JSON.stringify(cards));
      setFilteredCards(JSON.parse(localStorage.getItem('cards')));
      setAllCards(JSON.parse(localStorage.getItem('cards')));
      setMainCards(JSON.parse(localStorage.getItem('cards')).filter((i) => i.mainPage === true).sort(function(a, b){
        return a.index-b.index
      }));
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

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

  function handleTagClick(e) {
     const cards = allCards.filter((card) => {
      return card.tag.includes(e);
    });
     setFilteredCards(cards);
  }

  const tags = allCards.map((card) => {
    return card.tag;
  })

  const sortedTags = tags.reverse().filter((e, i, arr) => {
    return arr.indexOf(e, i+1) === -1;
  }).reverse();

  function handleFilterDropping() {
    setFilteredCards(allCards);
  }

  //Slider
  function handlSliderClickNext() {
    const currentCard = filteredCards.indexOf(selectedCard);
    const nextIndex = currentCard === filteredCards.length - 1 ? 0 : currentCard + 1;
    const nextPic = filteredCards.find((el, idx) => idx === nextIndex);
    setSelectedCard(nextPic);

  }

  function handlSliderClickPrev() {
    const currentCard = filteredCards.indexOf(selectedCard);
    const prevIndex = currentCard ? currentCard - 1 : filteredCards.length - 1;
    const nextPic = filteredCards.find((el, idx) => idx === prevIndex);
    setSelectedCard(nextPic);
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

    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        handlePopupClose();
        closePopupResult();
      }
    }
    function handleOverlayClose (evt) {
      if (evt.target.classList.contains('popup_opened')) {
        handlePopupClose();
      }
      if (evt.target.className == 'popupResult') {
        debugger
        console.log(evt.target)
        debugger
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
          handleTagClick={handleTagClick}
          tags={sortedTags}
          setClickedTag={setClickedTag}
        />
        <Switch>
          <Route exact path="/">
            <Main
              /* pic={filteredCards} */
              pic={mainCards}
              handleCardClick={handleCardClick}
              handleTagClick={handleTagClick}
              clickedTag={clickedTag}
              setClickedTag={setClickedTag}
              onBtnClick={handleFilterDropping}
            />
          </Route>

          <Route exact path="/works">
            <CardList
              /* pic={filteredCards} */
              pic={filteredCards}
              onCardClick={handleCardClick}
              onTagClick={handleTagClick}
              clickedTag={clickedTag}
              setClickedTag={setClickedTag}
              onBtnClick={handleFilterDropping}
            />
          </Route>

          <Route exact path="/about">
            <About
              openPhoto={openPhoto}
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
        <Footer />
        <Slider
          card={selectedCard}
          onClose={handlePopupClose}
          onNextClick={handlSliderClickNext}
          onPrevClick={handlSliderClickPrev}
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
