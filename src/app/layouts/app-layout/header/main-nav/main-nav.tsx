import classNames from 'classnames';
import { Link } from 'react-router';

type Props = {
  className?: string;
}

function MainNav({ className }: Props) {
  return (
    <nav className={classNames(
      'main-nav',
      className,
    )}
    >
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link className="main-nav__link" to="/catalog">Каталог</Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="#">Гарантии</Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="#">Доставка</Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="#">О компании</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
