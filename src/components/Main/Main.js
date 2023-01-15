import Promo from '../Promo/Promo';
import CardList from '../CardList/CardList';

function Main(props) {

  const menuBtnClass = props.clickedTag ? 'filter__btn_active' : '';

  function handleFilterDropping() {
    props.onBtnClick();

    props.setClickedTag(false);
  }

  return (
    <main className="main">
      <Promo />
      <CardList
        pic={props.pic}
        onCardClick={props.handleCardClick}
        onTagClick={props.handleTagClick}
        setClickedTag={props.setClickedTag}
        btnActive={true}
      />
      <p className={`filter__btn ${menuBtnClass}`} onClick={handleFilterDropping}>Show all works</p>
    </main>

  );

}


export default Main;
