import telegram from '../../images/light/icons8-телеграм-50.png';
import email from '../../images/light/icons8-почта-50.png';
import dribbble from '../../images/light/icons8-dribbble-50.png';
import inst from '../../images/light/icons8-instagram-50.png';

function Footer() {
  return (
    <footer className="footer">
     {/*  <p className="footer__copyright">&copy; 2023</p> */}
      <div className="footer__contacts">
        <a href="https://t.me/nsstafeeva" className="footer__link" title="Telegram" target="_blank">
          <img src={telegram} alt="logo inst" className="footer__img"></img>
        </a>
        <a href="mailto:nsstafeeva@gmail.com" className="footer__link" title="Sent email" target="_blank">
          <img src={email} alt="logo inst" className="footer__img" ></img>
        </a>
        <a href="https://dribbble.com/NatalyaStafeeva" className="footer__link" title="Dribbble" target="_blank">
          <img src={dribbble} alt="logo inst" className="footer__img"></img>
        </a>
        <a href="https://www.instagram.com/natalyastafeeva/" className="footer__link" title="Instagram" target="_blank">
          <img src={inst} alt="logo inst" className="footer__img"></img>
        </a>
      </div>
    </footer>
  );
}


export default Footer;
