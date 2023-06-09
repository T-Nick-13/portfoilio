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
      <div className="main__pictures">
        <h2 className="main__heading">Welcome to Stafeeva.site !</h2>
        <CardList
          onCardClick={props.handleCardClick}
        />
      </div>
      {/* <p className={`filter__btn ${menuBtnClass}`} onClick={handleFilterDropping}>Show all works</p> */}
    </main>

  );

}


export default Main;
