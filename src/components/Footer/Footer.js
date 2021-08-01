import { Link } from 'react-router-dom';
import instPath from '../../images/free-icon-instagram-1077042.png';
import asPath from '../../images/stock.png';

import Navigation from '../Navigation/Navigation';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2021 </p>
      <div className="footer__contacts">
        <Link to="/">
          <img src={instPath} alt="logo inst" className="footer__img"></img>
        </Link>
        <Link to="/">
          <img src={asPath} alt="logo as" className="footer__img"></img>
        </Link>

      </div>

    </footer>
  );
}


export default Footer;
