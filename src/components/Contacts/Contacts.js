import telegram from '../../images/light/icons8-телеграм-50.png';
import email from '../../images/light/icons8-почта-50.png';
import behance from '../../images/light/icons8-behance-48.png';
import inst from '../../images/light/icons8-instagram-50.png';
import adobe from '../../images/light/adobe.png';
import shutter from '../../images/light/shutter.png';

function Contacts(props) {

  return (
    <div className='contacts'>
      <a
        href="mailto:nsstafeeva@gmail.com"
        className={`contacts__link${props.activeLinks?.includes('email') ? ' contacts__link_active' : ''}`}
        title="Sent email"
        target="_blank"
      >
        <img src={email} alt="email" className="contacts__img" ></img>
      </a>

      <a
        href="https://t.me/nsstafeeva"
        className={`contacts__link${props.activeLinks?.includes('telegram') ? ' contacts__link_active' : ''}`}
        title="Telegram"
        target="_blank"
      >
        <img src={telegram} alt="telegram" className="contacts__img"></img>
      </a>

      <a
        href="https://www.instagram.com/natalyastafeeva/"
        className={`contacts__link${props.activeLinks?.includes('instagram') ? ' contacts__link_active' : ''}`}
        title="Instagram"
        target="_blank"
      >
        <img src={inst} alt="instagram" className="contacts__img"></img>
      </a>

      <a
        href="https://www.behance.net/natalyastafeeva/projects"
        className={`contacts__link${props.activeLinks?.includes('behance') ? ' contacts__link_active' : ''}`}
        title="Behance" target="_blank"
      >
        <img src={behance} alt="behance" className="contacts__img"></img>
      </a>

      <a
        href="https://stock.adobe.com/ru/contributor/209632961/stafeeva"
        className={`contacts__link contacts__link_dim${props.activeLinks?.includes('adobe') ? ' contacts__link_active' : ''}`}
        title="Adobe stock" target="_blank"
      >
        <img src={adobe} alt="Adobe stock" className="contacts__img"></img>
      </a>

      <a
        href="https://www.shutterstock.com/g/Stafeeva+Natalya"
        className={`contacts__link contacts__link_dim${props.activeLinks?.includes('shutter') ? ' contacts__link_active' : ''}`}
        title="Shutterstock" target="_blank"
      >
        <img src={shutter} alt="shutterstock" className="contacts__img contacts__img_cut"></img>
      </a>

    </div>
  );
}


export default Contacts;
