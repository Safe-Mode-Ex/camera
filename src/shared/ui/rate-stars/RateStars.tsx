import {Icon} from '../icon';

const MAX_RATING = 5;

interface Props {
  rating: number;
}

function RateStars({rating}: Props) {
  return (
    new Array(MAX_RATING).fill(null).map((_, index) => {
      const isFullStar = index + 1 <= rating;

      return isFullStar ?
        <Icon key={index} title="icon-full-star" width="17" height="16" /> :
        <Icon key={index} title="icon-star" width="17" height="16" />;
    })
  );
}

export default RateStars;
