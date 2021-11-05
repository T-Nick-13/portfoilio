import { Link } from 'react-router-dom';
import React from 'react';


function Card(props) {

  function handlCardClick() {
    props.onCardClick({
      link: props.link,
      tag: props.tag
    })
  }

  function handleTagClick(e) {
    const tagsName = e.target.textContent;
    props.onTagClick(tagsName);

    props.setClickedTag(true);
  }

  return (
    <div className="card" >
      <img src={props.link} alt={props.name} className="card__img" ></img>
      <div className="card__overlay" onClick={handlCardClick}></div>
      <p className="card__tag" onClick={handleTagClick}>{props.tag}</p>
    </div>
  );
}


export default Card;
