import { Link } from 'react-router-dom';


function Card(props) {

  function handlCardClick() {
    props.onCardClick({
      link: props.link,
      tag: props.tag
    })
  }

  return (
    <div className="card" onClick={handlCardClick}>
      <img src={props.link} alt={props.name} className="card__img"></img>
      <div className="card__overlay"></div>
      <Link to="/" className="card__tag">{props.tag}</Link>
    </div>
  );
}


export default Card;
