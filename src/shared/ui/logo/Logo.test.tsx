import {render, screen} from '@testing-library/react';
import Logo from './Logo';
import {withHistory} from '@/shared/lib/with-history';

describe('Component: Logo', () => {
  const ariaLabelText = 'Переход на главную';

  it('should render properly', () => {
    render(withHistory(<Logo />));
    expect(screen.getByLabelText(ariaLabelText)).toBeInTheDocument();
  });

  it('should display coloured icon if isMono is false', () => {
    const logoColoredIconHref = '#icon-logo';

    render(withHistory(<Logo />));
    const logoIconHref = screen
      .getByLabelText(ariaLabelText)
      .getElementsByTagName('use')[0]
      .getAttribute('xlink:href');

    expect(logoIconHref).toBe(logoColoredIconHref);
  });

  it('should display mono icon if isMono is true', () => {
    const logoMonoIconHref = '#icon-logo-mono';

    render(withHistory(<Logo isMono={true} />));
    const logoIconHref = screen
      .getByLabelText(ariaLabelText)
      .getElementsByTagName('use')[0]
      .getAttribute('xlink:href');

    expect(logoIconHref).toBe(logoMonoIconHref);
  });
});
