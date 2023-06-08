import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { pictures, rowTest } from '../../utils/constants';

function CardList(props) {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="cards-container">
      {rowTest.map((r, inx) => (
        <div className="cards-container__row" key={inx}>
          {r.row.map((i, indx) => (
            <Card
              card={i}
              key={indx}
              onCardClick={props.onCardClick}
              onTagClick={props.onTagClick}
              setClickedTag={props.setClickedTag}
              btnActive={props.btnActive}
          />
          ))}
        </div>
      ))}
    </div>

  );

}

export default CardList;
