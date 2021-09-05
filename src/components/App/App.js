import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';
import About from '../About/About';


import { column1, column2, column3 } from '../../utils/constants';

function App() {

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      tag: card.tag
    })
  }

  function handlePopupClose(e) {
    setSelectedCard({})
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
              column1={column1}
              column2={column2}
              column3={column3}
              handleCardClick={handleCardClick}
            />
          </Route>

          <Route exact path="/about">
            <About />
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
