import React from 'react';

import logo from '../../images/light/premium-icon-check-mark-4225683.png'

function PopupResult(props) {

  return (
    <div className={props.isSent ? "popupResult" : "popupResult popupResult_inactive"}>
      <div className="popupResult__container">
        <img className="popupResult__img" src={logo} alt="data sent"></img>
        <h2 className="popupResult__heading">Message sent successfully</h2>
        <button className="popupResult__btn" type="button" onClick={props.closePopup}>Ok</button>
      </div>
    </div>
  )
};

export default PopupResult;
