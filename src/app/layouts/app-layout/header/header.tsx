import { Logo } from '../../../../shared/ui/logo';
import MainNav from './main-nav/main-nav';

function Header() {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo />
        <MainNav className="header__main-nav" />
      </div>
    </header>
  );
}

export default Header;
