import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { rows } from '../../utils/constants';

function CardList(props) {

  /* React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []) */

  return (
    <div className="cards-container">
      {rows.map((r, inx) => (
        <div className="cards-container__row" key={inx}>
          {r.row.map((i, indx) => (
            <Card
              card={i}
              key={indx}
              onCardClick={props.onCardClick}
          />
          ))}
        </div>
      ))}
    </div>

  );

}

export default CardList;
