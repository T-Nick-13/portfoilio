import { Link } from 'react-router-dom';
import React from 'react';

function Navigation() {

  const [openedMenu, setOpenMenu] = React.useState(false);

  const menuClass = openedMenu ? 'menu menu_active' : 'menu';
  const burgerClass = openedMenu ? 'burger burger_inactive' : 'burger';


  function handleBurgerClick() {
    openedMenu ? setOpenMenu(false) : setOpenMenu(true);
  }

  return (
    <>
    <div className={burgerClass} onClick={handleBurgerClick}>
      <span></span>
    </div>
    <nav className={menuClass}>
      <ul className="menu__ul">
        <li>
          <Link to="/" className="menu__li">Обо мне</Link>
        </li>
        <li>
          <Link to="/" className="menu__li">Работы</Link>
        </li>
        <li>
          <Link to="/" className="menu__li">Контакты</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navigation;
