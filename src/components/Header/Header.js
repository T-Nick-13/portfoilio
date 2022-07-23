import { Link } from 'react-router-dom';
import React from 'react';
import logoPath from '../../images/Video.svg';

import Navigation from '../Navigation/Navigation';

function Header(props) {

  const [headerClass, setHeaderClass] = React.useState('');

  let lastScroll = 0;
  let scrollUp = '';

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setHeaderClass('');
        scrollUp = false;
        return;
      }
      if (currentScroll > lastScroll && lastScroll < 1) {
        setHeaderClass('header__container_first-scroll');
      }

      if (currentScroll > lastScroll && scrollUp == true && !document.body.classList.contains('body_unscrolled')) {
        setHeaderClass('header__container_first-scroll header__container_up');
        scrollUp = false;
      }
      else if (currentScroll < lastScroll) {
        scrollUp = true;
        setHeaderClass('header__container_fixed');
      }
      //console.log(`current: ${currentScroll}, last: ${lastScroll}`)
      lastScroll = currentScroll;
    });
  },[])

  return (
    <header className="header">
      <div className={`header__container ${headerClass}`}>
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
