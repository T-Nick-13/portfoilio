import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerState, setHeaderState] = useState('init');
  const [transition, setTransition] = useState(false);
  const headerHeight = 70;

  function controlNavbar() {
    if (typeof window !== 'undefined') {
      //transition is not active before the first scroll
      if (window.scrollY < headerHeight) {
        setHeaderState('init');
        setTransition(false);
      }
      //set active transition after first scroll
      if (window.scrollY > headerHeight && window.scrollY > lastScrollY && headerState === 'init') {
        setHeaderState('hidden');
        setTimeout(() => {
          setTransition(true);
        })
      }

      if (window.scrollY > headerHeight && window.scrollY > lastScrollY) {
        setHeaderState('hidden');
      }

      if (window.scrollY > headerHeight && window.scrollY < lastScrollY) {
        setHeaderState('fixed');
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`header${transition ? ' header_transition' : ''} header_${headerState}`}>
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
