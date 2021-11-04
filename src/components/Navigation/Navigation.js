import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Navigation(props) {

  const [openedMenu, setOpenMenu] = React.useState(false);
  const [openedSubMenu, SetOpenedSubMenu] = React.useState(false);
  const currentLocation = useLocation().pathname;

  const menuClass = openedMenu ? 'menu menu_active' : 'menu';
  const burgerClass = openedMenu ? 'burger burger_inactive' : 'burger';
  const liClass = openedSubMenu ? '_active' : '';

  function handleBurgerClick() {
    openedMenu ? setOpenMenu(false) : setOpenMenu(true);
  }

  function handleArrowClick() {
    openedSubMenu ? SetOpenedSubMenu(false) : SetOpenedSubMenu(true);
  }

  function handleTagClick(e) {
    const tagsName = e.target.textContent;
    props.onTagClick(tagsName);
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
          <Link to="/" className={currentLocation === '/' || currentLocation ==='/works' ? 'menu__li menu__li_active' : 'menu__li'}
            onClick={handleBurgerClick}>Works</Link>
          <span className="menu__arrow" onClick={handleArrowClick}></span>

          <ul className="menu__sub-ul">

            {props.tags.map((tag) => {
              return (
                <li className="menu__sub-li" onClick={handleTagClick} key={tag}>{tag}</li>
              )
            })}

          </ul>

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
