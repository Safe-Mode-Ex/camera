import {Link} from 'react-router-dom';
import {Icon} from '../icon';
import {IconLogo} from './enums/icon-logo';
import {AppRoute} from '@/shared/enums';

interface Props {
  isMono?: boolean;
  className?: string;
}

function Logo({className, isMono = false}: Props) {
  const iconTitle = isMono ? IconLogo.mono : IconLogo.default;
  return (
    <Link className={className} to={AppRoute.Main} aria-label="Переход на главную">
      <Icon width="100" height="36" title={iconTitle} />
    </Link>
  );
}

export default Logo;
