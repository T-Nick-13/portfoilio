import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';
import { column1, column2, column3 } from '../../utils/constants';

function App() {

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      tag: card.tag
    })

  }


  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main
          column1={column1}
          column2={column2}
          column3={column3}
          handleCardClick={handleCardClick}
        />
        <Footer />

        <ImagePopup
          card={selectedCard}

        />
      </div>

    </div>
  );
}


export default App;
