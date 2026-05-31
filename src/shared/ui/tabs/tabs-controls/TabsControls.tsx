import type {ReactNode} from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
}

function TabsControls({children, className, 'aria-label': ariaLabel}: Props) {
  return (
    <div
      className={classNames('tabs__controls', className)}
      role="tablist"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

export default TabsControls;
