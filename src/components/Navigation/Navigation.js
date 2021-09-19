import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Navigation() {

  const [openedMenu, setOpenMenu] = React.useState(false);
  const [openedSubMenu, SetOpenedSubMenu] = React.useState(false);

  const menuClass = openedMenu ? 'menu menu_active' : 'menu';
  const burgerClass = openedMenu ? 'burger burger_inactive' : 'burger';
  const liClass = openedSubMenu ? '_active' : '';


  function handleBurgerClick() {
    openedMenu ? setOpenMenu(false) : setOpenMenu(true);
  }

  function handleArrowClick() {
    openedSubMenu ? SetOpenedSubMenu(false) : SetOpenedSubMenu(true);
  }



  const currentLocation = useLocation().pathname;

  return (
    <>
    <div className={burgerClass} onClick={handleBurgerClick}>
      <span></span>
    </div>
    <nav className={menuClass}>
      <ul className="menu__ul">
        <li>
          <Link to="/about" className={currentLocation === '/about' ? 'menu__li menu__li_active' : 'menu__li'}
            onClick={handleBurgerClick}>About</Link>
        </li>


        <li className={liClass}>
          <Link to="/" className={currentLocation === '/' || currentLocation ==='/works' ? 'menu__li menu__li_active' : 'menu__li'}
            onClick={handleBurgerClick}>Works</Link>
          <span className="menu__arrow" onClick={handleArrowClick}></span>
          <ul className="menu__sub-ul">
            <li >
              <Link to="#" className="menu__sub-li">Advertising</Link>
            </li>
            <li>
              <Link to="#" className="menu__sub-li">Stickers</Link>
            </li>
            <li>
              <Link to="#" className="menu__sub-li">People</Link>
            </li>
          </ul>
        </li>


        <li>
          <Link to="/contacts" className={currentLocation === '/contacts' ? 'menu__li menu__li_active' : 'menu__li'}
          onClick={handleBurgerClick}>Contacts</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navigation;
