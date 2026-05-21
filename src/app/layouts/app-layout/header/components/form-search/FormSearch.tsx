import {Icon} from '@/shared/ui/icon';
import './FormSearch.css';

function FormSearch() {
  return (
    <div className="form-search">
      <form>
        <label>
          <Icon className="form-search__icon" title="icon-lens" width="16" height="16" />
          <input className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту" />
        </label>
        <ul className="form-search__select-list">
          <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 8i</li>
          <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 7i</li>
          <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 6i</li>
          <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 5i</li>
          <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 4i</li>
        </ul>
      </form>
      <button className="form-search__reset" type="reset">
        <Icon title="icon-close" width="10" height="10" />
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default FormSearch;
