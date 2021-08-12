import { Link } from 'react-router-dom';


function ImagePopup(props) {
  return (
    <div className={`popup-image ${props.card.link ? 'popup_opened' : ''}`} >
      <div className="popup-image__container">
        <img className="popup-image__picture" src={props.card.link} alt={props.card.tag} />
        {/* <p className="popup-image__title">{props.card.name}</p> */}
        <button className="popup-image__close-btn popup__close-btn" type="button" onClick={props.onClose} ></button>
      </div>
    </div>
  );
}


export default ImagePopup;
