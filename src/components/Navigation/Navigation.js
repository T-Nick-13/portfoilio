import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="menu">
      <ul className="menu__ul">
        <li>
          <Link to="/" className="menu__li">Обо мне</Link>
        </li>
        <li>
          <Link to="/" className="menu__li">Работы</Link>
        </li>
        <li>
          <Link to="/" className="menu__li">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
