import React from 'react';

import photo from '../../images/light/photo.jpg';
import Contacts from '../Contacts/Contacts';

function PhotoPopup(props) {
  return (
    <div className={`photo-popup popup-image ${props.isOpened ? 'popup_opened' : ''}`}>
      <div className="photo-popup__container popup-image__container">
        <img className="photo-popup__image popup-image__picture" src={photo} alt="me" />
        <div id="photo-popup__text-container">
          <p className="photo-popup__text">My name is Natalia.</p>
          <p className="photo-popup__text">I&apos;m a vector Illustrator</p>
          <p className="photo-popup__text">Stay in touch</p>
          <Contacts
            compClass="photo-popup__contacts"
          />
        </div>
        <button className="popup__close-btn btn-cross" type="button" onClick={props.onClose}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" x2="100" y1="0" y2="100" />
            <line x1="0" x2="100" y1="100" y2="0" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PhotoPopup;
