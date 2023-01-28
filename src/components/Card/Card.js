import React from 'react';

function Card(props) {

  const [imgWidth, setImgWidth] = React.useState('');

  function handlCardClick() {
    props.onCardClick(props.card);
  }

  function handleTagClick(e) {
    const tagsName = e.target.textContent;
    props.onTagClick(tagsName);

    props.setClickedTag(true);
  }

  function handleWidth(e) {
    /* console.log(`natural ${e.target.currentSrc.substring(49)}:
    ${e.target.naturalWidth / e.target.naturalHeight} / render: ${e.target.offsetWidth / e.target.offsetHeight} / diff:
    ${e.target.naturalWidth / e.target.naturalHeight - e.target.offsetWidth / e.target.offsetHeight}/ width: ${e.target.naturalWidth}`
    ) */

    if (window.innerWidth < 769) {
      setImgWidth('100');
    } else {

      if (props.card.index === 0) {
        setImgWidth('44.5');
      }

      if (props.card.index === 1) {
        setImgWidth('18.05');
      }

      if (props.card.index === 2) {
        setImgWidth('34');
      }

      if (props.card.index === 4 || props.card.index === 5) {
        setImgWidth('48');
      }

      if (props.card.index > 5) {
        setImgWidth('30');
      }

    }
  }

  React.useLayoutEffect(() => {
    handleWidth();
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  })


  return (
    <div className="card" style={{width: imgWidth + '%'}} onClick={handlCardClick}>
      <img src={props.card.link} alt={props.card.name} className="card__img"  ></img>

      <div className="card__overlay"></div>
      {/* <p className="card__tag" onClick={handleTagClick}>{props.tag}</p> */}
    </div>
  );
}


export default Card;
