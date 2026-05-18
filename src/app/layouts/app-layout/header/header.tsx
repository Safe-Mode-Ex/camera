import { Logo } from '../../../../shared/ui/logo';
import BasketLink from './basket-link/basket-link';
import FormSearch from './form-search/form-search';
import MainNav from './main-nav/main-nav';

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
