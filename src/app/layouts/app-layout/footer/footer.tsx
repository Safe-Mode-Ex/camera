import FooterInfo from './footer-info/footer-info';
import FooterNav from './footer-nav/footer-nav';
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
