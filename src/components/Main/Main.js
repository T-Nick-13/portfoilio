import { Link } from 'react-router-dom';

import img1 from '../../images/recycle.jpeg';
import img2 from '../../images/vaccine.jpeg';
import img3 from '../../images/delivers.jpg';


function Main() {
  return (
    <main className="main">

      <div className="grid">
        <Link to="/" className="grid__item">
          <img src={img2} alt="" className="grid__img"></img>
          <div className="grid__overlay"></div>
        </Link>
        <Link to="/" className="grid__item" >
          <img src={img3} alt="" className="grid__img"></img>
          <div className="grid__overlay"></div>
        </Link>
        <Link to="/" className="grid__item" >
          <img src={img1} alt="" className="grid__img"></img>
          <div className="grid__overlay"></div>
        </Link>
      </div>

      <div className="grid">
        <Link to="/" className="grid__item" >
          <img src={img1} alt="" className="grid__img"></img>
          <div className="grid__overlay"></div>
        </Link>
        <Link to="/" className="grid__item" >
          <img src={img2} alt="" className="grid__img"></img>
          <div className="grid__overlay"></div>
        </Link>
        <Link to="/" className="grid__item" >
          <img src={img3} alt="" className="grid__img"></img>
          <div className="grid__overlay"></div>
        </Link>
      </div>

      <div className="grid">
        <Link to="/" className="grid__item" >
          <img src={img3} alt="" className="grid__img"></img>
          <div className="grid__overlay"></div>
        </Link>
        <Link to="/" className="grid__item" >
          <img src={img1} alt="" className="grid__img"></img>
          <div className="grid__overlay"></div>
        </Link>
        <Link to="/" className="grid__item" >
          <img src={img2} alt="" className="grid__img"></img>
          <div className="grid__overlay"></div>
        </Link>
      </div>

    </main>
  );
}


export default Main;
