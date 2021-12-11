import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Contact from '../Contact/Contact';

import { pic } from '../../utils/constants';

function App() {

  const [selectedCard, setSelectedCard] = React.useState();
  const [filteredCards, setFilteredCards] = React.useState(pic);
  const [clickedTag, setClickedTag] = React.useState(false);
  const [nextCard, setNextCard] = React.useState(0);


  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handlePopupClose() {
    setSelectedCard({});
  }

  function handleTagClick(e) {
     const filteredCards = pic.filter((card) => {
      return card.tag.includes(e);
    });
     setFilteredCards(filteredCards);
  }

  const tags = pic.map((card) => {
    return card.tag;
  })

  const sortedTags = tags.reverse().filter((e, i, arr) => {
    return arr.indexOf(e, i+1) === -1;
  }).reverse();

  function handleFilterDropping() {
    setFilteredCards(pic);
  }

  //Slider
  function handlSliderClickNext() {
    const indexSelectedCard = filteredCards.indexOf(selectedCard);
    const indexNextCard = filteredCards.indexOf(nextCard);
    const currentCard = indexSelectedCard === -1 ? indexNextCard : indexSelectedCard;

    const nextIndex = currentCard === filteredCards.length - 1 ? 0 : currentCard + 1;
    const nextPic = filteredCards.find((el, idx) => idx === nextIndex);
    setSelectedCard();
    setNextCard(nextPic);
  }

  function handlSliderClickPrev() {

    const indexSelectedCard = filteredCards.indexOf(selectedCard);
    const indexNextCard = filteredCards.indexOf(nextCard);
    const currentCard = indexSelectedCard === -1 ? indexNextCard : indexSelectedCard;

    const prevIndex = currentCard ? currentCard - 1 : filteredCards.length - 1;
    const nextPic = filteredCards.find((el, idx) => idx === prevIndex);
    setSelectedCard();
    setNextCard(nextPic);
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
          nextCard={nextCard}
        />
      </div>
    </div>
  );
}


export default App;
