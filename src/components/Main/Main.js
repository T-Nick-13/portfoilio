import Card from '../Card/Card';


function Main(props) {

  const menuBtnClass = props.clickedTag ? 'filter__btn_active' : '';

  function handleFilterDropping() {
    props.onBtnClick();

    props.setClickedTag(false);
  }

  return (
    <main className="main">
      {props.pic.map((card) =>{
        return (
          <Card
            card={card}
            tag={card.tag}
            key={card.name}
            onCardClick={props.handleCardClick}
            onTagClick={props.handleTagClick}
            setClickedTag={props.setClickedTag}
          />
        )
      })}
      <p className={`filter__btn ${menuBtnClass}`} onClick={handleFilterDropping}>Show all works</p>
    </main>

  );

}


export default Main;
