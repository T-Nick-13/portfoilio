import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import logo from '../../images//light/logo.svg';

function Navigation(props) {

  const menuClass = props.activeMenu ? 'menu menu_active' : 'menu';

  const { pathname, hash, key } = useLocation();

  //smooth scroll to the works from diff routes
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  function handleBurgerClick(e) {
    if (props.activeMenu) {
      props.openMenu();
    }
  }

  return (
    <>
    <Link to="/" className={`menu__li menu__li-logo`}>
      <img src={logo} alt="Stafeeva"></img>
    </Link>
    <nav className={menuClass}>
      <ul className="menu__ul">
        <li>
          <Link to="/about" className={pathname === '/about' ? 'menu__li menu__li_active' : 'menu__li'}
            onClick={handleBurgerClick}>About</Link>
        </li>

        <li>
          <Link to="/#works" className={/* pathname ==='/' ? 'menu__li menu__li_active' : */ 'menu__li'}
            onClick={handleBurgerClick}>Works</Link>
        </li>

        <li className="menu__logo">
          <Link to="/" className={pathname === '/' ? 'menu__li' : 'menu__li'}
            onClick={handleBurgerClick}>
            <img src={logo} alt="Stafeeva"></img>
          </Link>
        </li>

        <li>
          <Link to="/usage" className={pathname === '/usage' ? 'menu__li menu__li_active' : 'menu__li'}
            onClick={handleBurgerClick}>Usage</Link>
        </li>

        <li>
          <Link to="/contact" className={pathname === '/contact' ? 'menu__li menu__li_active' : 'menu__li'}
          onClick={handleBurgerClick}>Contact</Link>
        </li>
      </ul>
    </nav>

    </>
  );
}

export default Navigation;
