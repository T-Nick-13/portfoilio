import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import logo from '../../images//light/logo.svg';

function Navigation(props) {

  const [openedMenu, setOpenMenu] = React.useState(false);
  const [openedSubMenu, SetOpenedSubMenu] = React.useState(false);

  const currentLocation = useLocation().pathname;

  const menuClass = openedMenu ? 'menu menu_active' : 'menu';
  const burgerClass = openedMenu ? 'burger burger_inactive' : 'burger';
  const liClass = openedSubMenu ? '_active' : '';


  function handleBurgerClick() {
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

  function handleArrowClick() {
    openedSubMenu ? SetOpenedSubMenu(false) : SetOpenedSubMenu(true);
  }

  function handleMenuHover() {
    SetOpenedSubMenu(true);
  }

  function handleMenuHoverOut() {
    SetOpenedSubMenu(false);
  }

  function handleTagClick(e) {
    const tagsName = e.target.textContent;
    props.onTagClick(tagsName);
    SetOpenedSubMenu(false);
    props.setClickedTag(true);
    handleBurgerClick();
  }



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
          <Link to="/works" className={currentLocation ==='/works' ? 'menu__li menu__li_active' : 'menu__li'}
            onClick={handleBurgerClick}>Works</Link>
        </li>

        <li>
          <Link to="/" className={currentLocation === '/' ? 'menu__li' : 'menu__li'}
          onClick={handleBurgerClick}>
            <img src={logo} alt="Stafeeva"></img>
          </Link>
        </li>

        <li>
          <Link to="/usage" className={currentLocation === '/usage' ? 'menu__li menu__li_active' : 'menu__li'}
          onClick={handleBurgerClick}>Usage</Link>
        </li>

        <li>
          <Link to="/contact" className={currentLocation === '/contact' ? 'menu__li menu__li_active' : 'menu__li'}
          onClick={handleBurgerClick}>Contact</Link>
        </li>
      </ul>
    </nav>

    </>
  );
}

export default Navigation;
