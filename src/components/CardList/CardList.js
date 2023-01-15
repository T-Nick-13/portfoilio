import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

function CardList(props) {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
      <section className="main__pictures">
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 580: 2, 900: 3}}
        >
          <Masonry className="masonry" gutter="5px">
            {props.pic.map((card) =>{
              return (
                <Card
                  card={card}
                  tag={card.tag}
                  key={card._id}
                  onCardClick={props.onCardClick}
                  onTagClick={props.onTagClick}
                  setClickedTag={props.setClickedTag}
                  btnActive={props.btnActive}
                />
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
        <Link to="/works" className={`main__btn${props.btnActive ? ' main__btn_active' : ''}`}>Other works</Link>
      </section>

  );

}


export default CardList;
