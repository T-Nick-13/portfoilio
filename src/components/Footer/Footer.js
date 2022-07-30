import instPath from '../../images/light/free-icon-instagram-1077042.png';
import asPath from '../../images/light/stock-min.png';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2022</p>
      <div className="footer__contacts">
        <a href="https://www.instagram.com/natalyastafeeva/">
          <img src={instPath} alt="logo inst" className="footer__img"></img>
        </a>
        <a href="https://stock.adobe.com/ru/contributor/209632961/stafeeva">
          <img src={asPath} alt="logo as" className="footer__img"></img>
        </a>
      </div>
    </footer>
  );
}


export default Footer;
