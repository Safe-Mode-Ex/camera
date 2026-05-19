import classNames from 'classnames';
import { RateStars } from '../rate-stars';

type Props = {
  rating: number;
  total: number;
  className?: string;
};

function Rate({ rating, total, className }: Props) {
  return (
    <div className={classNames('rate', className)}>
      <RateStars rating={rating} />
      <p className="visually-hidden">Рейтинг: { rating }</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>
        { total }
      </p>
    </div>
  );
}

export default Rate;
