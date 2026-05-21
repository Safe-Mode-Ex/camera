import {Logo} from '@/shared/ui/logo';
import BasketLink from './basket-link/BasketLink';
import FormSearch from './form-search/FormSearch';
import './Header.css';
import MainNav from './main-nav/MainNav';

function Header() {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo className="header__logo" />
        <MainNav className="header__main-nav" />
        <FormSearch />
        <BasketLink />
      </div>
    </header>
  );
}

export default Header;
