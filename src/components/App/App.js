import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';
import About from '../About/About';
import Contact from '../Contact/Contact';


import { column1, column2, column3 } from '../../utils/constants';

function App() {

  const [selectedCard, setSelectedCard] = React.useState({});
  const [filteredTags, setFilteredTags] = React.useState(column1);


  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      tag: card.tag
    });
  }


  function handlePopupClose(e) {
    setSelectedCard({});
  }


  function handleTagClick() {

    const filteredCards = column1.filter((card) => {
      return card.tag.includes(this.tag)
    })

    setFilteredTags(filteredCards);

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
        handlePopupClose()
      }
    }

    document.addEventListener('keyup', handleEscClose);
    document.addEventListener('click', handleOverlayClose);
  }, [])


  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main
              column1={filteredTags}
              column2={column2}
              column3={column3}
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
