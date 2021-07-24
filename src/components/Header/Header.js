import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logoPath} alt="logo" />
        </Link>
        <Navigation />
      </div>

    </header>
  );
}


export default Header;
