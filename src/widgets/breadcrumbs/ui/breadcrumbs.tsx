import { Link } from 'react-router-dom';
import { Icon } from '../../../shared/ui/icon';
import { useBreadcrumbs } from '../model/hooks/use-breadcrumbs/use-breadcrumbs';
import './breadcrumbs.css';

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {breadcrumbs.map(({ title, href, isLast }) => (
            <li className="breadcrumbs__item" key={title}>
              {isLast ?
                <span className="breadcrumbs__link breadcrumbs__link--active">{title}</span> :
                <Link className="breadcrumbs__link" to={href}>{title}
                  <Icon title="icon-arrow-mini" width="5" height="8" />
                </Link>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
