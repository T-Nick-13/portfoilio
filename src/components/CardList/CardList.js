import React from 'react';
import Card from '../Card/Card';

function CardList(props) {
  return (
    <div className="cards-container">
      {props.rows.map((r) => (
        <div className={`cards-container__row ${props.rowClass}`} key={r.number}>
          {r.row.map((i) => (
            <Card
              card={i}
              key={i.src ? i.src : i.text}
              onCardClick={props.onCardClick}
              linkActive={props.linkActive}
              linkClass={props.linkClass}
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
