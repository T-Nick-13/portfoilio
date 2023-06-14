import React from 'react';
import Card from '../Card/Card';

function CardList(props) {

  return (
    <div className="cards-container">
      {props.rows.map((r, inx) => (
        <div className={`cards-container__row ${props.rowClass}`} key={inx}>
          {r.row.map((i, indx) => (
            <Card
              card={i}
              key={indx}
              onCardClick={props.onCardClick}
              linkActive={props.linkActive}
            >
              {props.children}
            </Card>
          ))}
        </div>
      ))}
    </div>

  );

}

export default CardList;
