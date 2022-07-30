import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { MAIN_API } from '../../utils/config';
import Api from '../../utils/Api';

import { pic } from '../../utils/constants';

function App() {

  const [selectedCard, setSelectedCard] = React.useState(0);
  const [allCards, setAllCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [clickedTag, setClickedTag] = React.useState(false);

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
    document.body.classList.remove('body_unscrolled');
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

  React.useEffect(() => {

    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        handlePopupClose();
      }
    }
    function handleOverlayClose (evt) {
      if (evt.target.classList.contains('popup_opened')) {
        handlePopupClose();
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
              pic={filteredCards}
              handleCardClick={handleCardClick}
              handleTagClick={handleTagClick}
              clickedTag={clickedTag}
              setClickedTag={setClickedTag}
              onBtnClick={handleFilterDropping}
            />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

        </Switch>

        <Footer />

        <Slider
          card={selectedCard}
          onClose={handlePopupClose}
          onNextClick={handlSliderClickNext}
          onPrevClick={handlSliderClickPrev}
        />
      </div>
    </div>
  );
}


export default App;
