import React from 'react';

import Navigation from '../Navigation/Navigation';

function Header(props) {

  return (
    <header className="header">
      <div className="header__container">
        <Navigation
          onTagClick={props.handleTagClick}
          tags={props.tags}
          setClickedTag={props.setClickedTag}
        />
      </div>
    </header>
  );
}


export default Header;
