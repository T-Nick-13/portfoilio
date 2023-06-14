import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import logo from '../../images//light/logo.svg';

function Navigation(props) {

  const [openedMenu, setOpenMenu] = React.useState(false);
  const [openedSubMenu, SetOpenedSubMenu] = React.useState(false);

  const menuClass = openedMenu ? 'menu menu_active' : 'menu';
  const burgerClass = openedMenu ? 'burger burger_inactive' : 'burger';
  const liClass = openedSubMenu ? '_active' : '';

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
    if (window.innerWidth < 767) {
      if (openedMenu) {
        setOpenMenu(false);
        document.body.classList.remove('body_unscrolled');
      }
      else {
        setOpenMenu(true);
        document.body.classList.add('body_unscrolled');
      }
    }
  }

  return (
    <>
    <div className={burgerClass} onClick={handleBurgerClick}>
      <span></span>
    </div>
    <nav className={menuClass}>
      <ul className="menu__ul">
        <li>
          <Link to="/about" className={pathname === '/about' ? 'menu__li menu__li_active' : 'menu__li'}
            onClick={handleBurgerClick}>About</Link>
        </li>

        <li className={liClass}>
          <Link to="/#works" className={/* pathname ==='/' ? 'menu__li menu__li_active' : */ 'menu__li'}
            onClick={handleBurgerClick}>Works</Link>
        </li>

        <li>
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
