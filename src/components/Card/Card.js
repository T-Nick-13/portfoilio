import React from 'react';

function Card(props) {

  const [imgWidth, setImgWidth] = React.useState('');

  function handlCardClick() {
    if (!props.sliderImgClass) {
     props.onCardClick(props.card);
    }
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

      if (props.card.index === 4 || props.card.index === 5 || props.card.index === 16 || props.card.index === 17) {
        setImgWidth('48');
      }

      if (props.card.index === 6) {
        setImgWidth('32.5');
      }

      if (props.card.index === 7) {
        setImgWidth('34');
      }

      if (props.card.index === 8) {
        setImgWidth('31.5');
      }

      if (props.card.index === 9 || props.card.index === 11) {
        setImgWidth('57');
      }

      if (props.card.index === 10 || props.card.index === 12) {
        setImgWidth('42');
      }

      if (props.card.index === 13) {
        setImgWidth('63');
      }

      if (props.card.index === 14) {
        setImgWidth('36');
      }

      if (props.card.index === 15 || props.card.index === 22) {
        setImgWidth('100');
      }

      if (props.card.index === 18) {
        setImgWidth('59');
      }

      if (props.card.index === 19) {
        setImgWidth('39');
      }

      if (props.card.index === 20) {
        setImgWidth('51');
      }

      if (props.card.index === 21) {
        setImgWidth('48');
      }

      if (props.card.index === 23) {
        setImgWidth('43');
      }

      if (props.card.index === 24) {
        setImgWidth('16');
      }

      if (props.card.index === 25) {
        setImgWidth('37');
      }


    }
  }

  React.useLayoutEffect(() => {
    handleWidth();
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  })

  return (
    <div className="card" style={!props.sliderImgClass ? {width: imgWidth + '%'} : {width: 'auto', cursor: 'auto'}}
      onClick={handlCardClick}>
      <img src={props.card.link} alt={props.card.name} className={`card__img ${props.sliderImgClass ? props.sliderImgClass : ''}`}  ></img>

      <div className="card__overlay" style={props.sliderImgClass ? {display: 'none'} : {display: 'block'}}></div>
      {/* <p className="card__tag" onClick={handleTagClick}>{props.tag}</p> */}
    </div>
  );
}


export default Card;
