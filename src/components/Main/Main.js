import { Link } from 'react-router-dom';

import img1 from '../../images/recycle.jpeg';
import img2 from '../../images/vaccine.jpeg';
import img3 from '../../images/delivers.jpg';


function Main() {
  return (
    <main className="main">

      <div className="column">
        <Link to="/" className="card">
          <img src={img2} alt="" className="card__img"></img>
          <div className="card__overlay"></div>
          <Link to="/" className="card__tag">#vaccine</Link>
        </Link>
        <Link to="/" className="card" >
          <img src={img3} alt="" className="card__img"></img>
          <div className="card__overlay"></div>
          <Link to="/" className="card__tag">#delivery</Link>
        </Link>
        <Link to="/" className="card" >
          <img src={img1} alt="" className="card__img"></img>
          <div className="card__overlay"></div>
          <Link to="/" className="card__tag">#recycle</Link>
        </Link>
      </div>

      <div className="column">
        <Link to="/" className="card" >
          <img src={img1} alt="" className="card__img"></img>
          <div className="card__overlay"></div>
          <Link to="/" className="card__tag">#recycle</Link>
        </Link>
        <Link to="/" className="card" >
          <img src={img2} alt="" className="card__img"></img>
          <div className="card__overlay"></div>
          <Link to="/" className="card__tag">#recycle</Link>
        </Link>
        <Link to="/" className="card" >
          <img src={img3} alt="" className="card__img"></img>
          <div className="card__overlay"></div>
          <Link to="/" className="card__tag">#recycle</Link>
        </Link>
      </div>

      <div className="column">
        <Link to="/" className="card" >
          <img src={img3} alt="" className="card__img"></img>
          <div className="card__overlay"></div>
          <Link to="/" className="card__tag">#recycle</Link>
        </Link>
        <Link to="/" className="card" >
          <img src={img1} alt="" className="card__img"></img>
          <div className="card__overlay"></div>
          <Link to="/" className="card__tag">#recycle</Link>
        </Link>
        <Link to="/" className="card" >
          <img src={img2} alt="" className="card__img"></img>
          <div className="card__overlay"></div>
          <Link to="/" className="card__tag">#recycle</Link>
        </Link>
      </div>

    </main>
  );
}


export default Main;
