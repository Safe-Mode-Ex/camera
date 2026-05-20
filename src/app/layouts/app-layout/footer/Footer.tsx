import FooterInfo from './footer-info/FooterInfo';
import FooterNav from './footer-nav/FooterNav';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <FooterInfo />
        <FooterNav />
      </div>
    </footer>
  );
}

export default Footer;
