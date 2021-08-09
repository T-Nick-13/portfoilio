import { Link } from 'react-router-dom';


function Card(props) {
  return (
    <Link to="/" className="card" onClick={props.handlclick}>
      <img src={props.link} alt={props.name} className="card__img"></img>
      <div className="card__overlay"></div>
      <Link to="/" className="card__tag">{props.tag}</Link>
    </Link>
  );
}


export default Card;
