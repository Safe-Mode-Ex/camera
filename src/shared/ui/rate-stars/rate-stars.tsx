import { Icon } from '../icon';

const MAX_RATING = 5;

type Props = {
  rating: number;
};

function RateStars({ rating }: Props) {
  return (
    new Array(MAX_RATING).fill(null).map((_, index) => {
      const isFullStar = index + 1 <= rating;

      return isFullStar ?
        <Icon title="icon-full-star" width="17" height="16" /> :
        <Icon title="icon-star" width="17" height="16" />;
    })
  );
}

export default RateStars;
