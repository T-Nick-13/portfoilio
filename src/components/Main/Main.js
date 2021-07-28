import { Link } from 'react-router-dom';

import img1 from '../../images/recycle.jpeg';
import img2 from '../../images/vaccine.jpeg';
import img3 from '../../images/delivers.jpg';


function Main() {
  return (
    <main className="main">

      <div className="grid">
        <div className="grid__item">
          <Link to="/">
            <div className="grid__item-wrapper"></div>
            <img src={img1} alt="" className="grid__img"></img>
          </Link>
        </div>
        <div className="grid__item">
          <Link to="/">
            <div className="grid__item-wrapper"></div>
            <img src={img2} alt="" className="grid__img"></img>
          </Link>
        </div>
        <div className="grid__item">
          <Link to="/">
            <div className="grid__item-wrapper"></div>
            <img src={img3} alt="" className="grid__img"></img>
          </Link>
        </div>
      </div>

      <div className="grid">
        <div className="grid__item">
          <Link to="/">
            <div className="grid__item-wrapper"></div>
            <img src={img2} alt="" className="grid__img"></img>
          </Link>
        </div>
        <div className="grid__item">
          <Link to="/">
            <div className="grid__item-wrapper"></div>
            <img src={img1} alt="" className="grid__img"></img>
          </Link>
        </div>
        <div className="grid__item">
          <Link to="/">
            <div className="grid__item-wrapper"></div>
            <img src={img3} alt="" className="grid__img"></img>
          </Link>
        </div>
      </div>

      <div className="grid">
        <div className="grid__item">
          <Link to="/">
            <div className="grid__item-wrapper"></div>
            <img src={img3} alt="" className="grid__img"></img>
          </Link>
        </div>
        <div className="grid__item">
          <Link to="/">
            <div className="grid__item-wrapper"></div>
            <img src={img2} alt="" className="grid__img"></img>
          </Link>
        </div>
        <div className="grid__item">
          <Link to="/">
            <div className="grid__item-wrapper"></div>
            <img src={img1} alt="" className="grid__img"></img>
          </Link>
        </div>
      </div>

    </main>
  );
}


export default Main;
