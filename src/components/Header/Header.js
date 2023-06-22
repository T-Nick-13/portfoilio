import React, { useEffect, useState, useCallback } from 'react';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';

function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerState, setHeaderState] = useState('init');
  const [transition, setTransition] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const headerHeight = 80;

  function controlNavbar() {
    if (typeof window !== 'undefined' && headerState !== 'active-menu') {
      // transition is not active before the first scroll
      if (window.scrollY < headerHeight) {
        setHeaderState('init');
        setTransition(false);
      }
      // set active transition after first scroll
      if (window.scrollY > headerHeight && window.scrollY > lastScrollY && headerState === 'init') {
        setHeaderState('hidden');
        setTimeout(() => {
          setTransition(true);
        }, 100);
      }

      if (window.scrollY > headerHeight && window.scrollY > lastScrollY) {
        setHeaderState('hidden');
      }

      if (window.scrollY > headerHeight && window.scrollY < lastScrollY) {
        setHeaderState('fixed');
      }

      setLastScrollY(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    } return false;
  }, [lastScrollY, activeMenu]);

  /*  function openMenu() {
    if (!activeMenu) {
      setActiveMenu(true);
      setHeaderState('active-menu');
    } else {
      setActiveMenu(false);
      setTransition(false);
      setHeaderState('init');
    }
  } */

  const openMenu = useCallback(() => {
    if (!activeMenu) {
      setActiveMenu(true);
      setHeaderState('active-menu');
    } else {
      setActiveMenu(false);
      setTransition(false);
      setHeaderState('init');
    }
  }, [activeMenu]);

  return (
    <header className={`header${transition ? ' header_transition' : ''} header_${headerState}`}>
      <div className="header__container">
        <Navigation
          activeMenu={activeMenu}
          openMenu={openMenu}
        />
        <Burger
          openMenu={openMenu}
          active={activeMenu}
        />
      </div>
    </header>
  );
}

export default Header;
