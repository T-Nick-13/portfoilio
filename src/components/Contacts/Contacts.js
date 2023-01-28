import telegram from '../../images/light/icons8-телеграм-50.png';
import email from '../../images/light/icons8-почта-50.png';
import dribbble from '../../images/light/icons8-dribbble-50.png';
import inst from '../../images/light/icons8-instagram-50.png';

function Contacts(props) {
  return (
    <div className={`contacts ${props.compClass}`}>
      <a href="https://t.me/nsstafeeva" className="contacts__link" title="Telegram" target="_blank">
        <img src={telegram} alt="logo inst" className="contacts__img"></img>
      </a>
      <a href="mailto:nsstafeeva@gmail.com" className="contacts__link" title="Sent email" target="_blank">
        <img src={email} alt="logo inst" className="contacts__img" ></img>
      </a>
      <a href="https://dribbble.com/NatalyaStafeeva" className="contacts__link" title="Dribbble" target="_blank">
        <img src={dribbble} alt="logo inst" className="contacts__img"></img>
      </a>
      <a href="https://www.instagram.com/natalyastafeeva/" className="contacts__link" title="Instagram" target="_blank">
        <img src={inst} alt="logo inst" className="contacts__img"></img>
      </a>
    </div>
  );
}


export default Contacts;
