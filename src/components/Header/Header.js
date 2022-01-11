import { Link } from 'react-router-dom';
import React from 'react';
import logoPath from '../../images/Video.svg';

import Navigation from '../Navigation/Navigation';

function Header(props) {

  const [headerClass, setHeaderClass] = React.useState('header__container');
  const [scrollDown, setScrollDown] = React.useState(false);

  let lastScroll = 0;

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setHeaderClass('header__container');
        return;
      }
      if (currentScroll > lastScroll && scrollDown == false && !document.body.classList.contains('body_unscrolled')) {
        setScrollDown(true);
        setHeaderClass('header__container_up');
      }
      else if (currentScroll < lastScroll) {
        setScrollDown(false);
        setHeaderClass('header__container_fixed');
      }
      lastScroll = currentScroll;
    });
  },[])

  return (
    <header className="header">
      <div className={headerClass}>
        <Link to="/">
          <img className="header__logo" src={logoPath} alt="logo"/>
        </Link>
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
