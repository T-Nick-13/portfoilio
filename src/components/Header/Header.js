import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
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
