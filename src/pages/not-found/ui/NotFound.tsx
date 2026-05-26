import NotFoundImage from './not-found-image/NotFoundImage';
import './NotFound.css';

function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <NotFoundImage />
        <p className="not-found__title">Какой позор!</p>
        <p className="not-found__text">
          Страницы до сих пор нет!<br />
          Сообщим, куда следует
        </p>
      </div>
    </main>
  );
}

export default NotFound;
