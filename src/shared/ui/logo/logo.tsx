import { Link } from 'react-router';
import { Icon } from '../icon';

type Props = {
  className?: string;
};

function Logo({ className }: Props) {
  return (
    <Link className={className} to="/" aria-label="Переход на главную">
      <Icon width="100" height="36" title="icon-logo" />
    </Link>
  );
}

export default Logo;
