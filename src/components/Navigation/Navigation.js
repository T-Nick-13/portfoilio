import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Navigation() {

  const [openedMenu, setOpenMenu] = React.useState(false);

  const menuClass = openedMenu ? 'menu menu_active' : 'menu';
  const burgerClass = openedMenu ? 'burger burger_inactive' : 'burger';


  function handleBurgerClick() {
    openedMenu ? setOpenMenu(false) : setOpenMenu(true);
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
          <Link to="/about" className={currentLocation === '/about' ? 'menu__li menu__li_active' : 'menu__li'}>About</Link>
        </li>
        <li>
          <Link to="/works" className={currentLocation === '/'
            || currentLocation ==='/works' ? 'menu__li menu__li_active' : 'menu__li'}>Works</Link>
        </li>
        <li>
          <Link to="/contacts" className={currentLocation === '/contacts' ? 'menu__li menu__li_active' : 'menu__li'}>Contacts</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navigation;
