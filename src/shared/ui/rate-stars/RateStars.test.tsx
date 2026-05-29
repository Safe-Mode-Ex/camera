import {render} from '@testing-library/react';
import RateStars from './RateStars';

describe('Component: RateStars', () => {
  it('should render properly', () => {
    const rating = 3;

    const {container} = render(<RateStars rating={rating} />);
    const fullStars = [...container
      .querySelectorAll('use')]
      .filter((el) => el.getAttribute('xlink:href') === '#icon-full-star');
    const emptyStars = [...container
      .querySelectorAll('use')]
      .filter((el) => el.getAttribute('xlink:href') === '#icon-star');

    expect(fullStars.length).toBe(rating);
    expect(emptyStars.length).toBe(2);
  });
});
