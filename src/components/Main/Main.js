import Card from '../Card/Card';
import Promo from '../Promo/Promo';


function Main(props) {

  const menuBtnClass = props.clickedTag ? 'filter__btn_active' : '';

  function handleFilterDropping() {
    props.onBtnClick();

    props.setClickedTag(false);
  }

  return (
    <main className="main">
      <Promo />
      <section className="main__pictures">
        {props.pic.map((card) =>{
          return (
            <Card
              card={card}
              tag={card.tag}
              key={card._id}
              onCardClick={props.handleCardClick}
              onTagClick={props.handleTagClick}
              setClickedTag={props.setClickedTag}
            />
          )
        })}
      </section>
      <p className={`filter__btn ${menuBtnClass}`} onClick={handleFilterDropping}>Show all works</p>
    </main>

  );

}


export default Main;
