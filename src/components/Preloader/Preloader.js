import React from 'react';

function Preloader(props) {
  return (
    <div className={props.inSend ? 'preloader' : 'preloader preloader_inactive'}>
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
    </div>
  );
}

export default Preloader;
