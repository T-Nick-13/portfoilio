import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';
import About from '../About/About';
import Contact from '../Contact/Contact';


import { pic } from '../../utils/constants';

function App() {

  const [selectedCard, setSelectedCard] = React.useState({});
  const [filteredCards, setFilteredCards] = React.useState(pic);


  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      tag: card.tag
    });
  }

  function handlePopupClose() {
    setSelectedCard({});
  }

  function handleTagClick(e) {
     const filteredCards = pic.filter((card) => {
      return card.tag.includes(e)
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

  React.useEffect(() => {
    const ESC = 'Escape';

    function handleEscClose(evt) {
      if (evt.key === ESC) {
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
          handleFilterDropping={handleFilterDropping}
        />
        <Switch>
          <Route exact path="/">
            <Main
              pic={filteredCards}
              handleCardClick={handleCardClick}
              handleTagClick={handleTagClick}
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

        <ImagePopup
          card={selectedCard}
          onClose={handlePopupClose}
        />
      </div>

    </div>
  );
}


export default App;
