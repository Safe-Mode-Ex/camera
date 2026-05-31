import type {ReactNode} from 'react';
import {useActiveValue} from '../hooks';
import classNames from 'classnames';

interface Props {
  value: string;
  children: ReactNode;
}

function TabsControl({value, children}: Props) {
  const [isActive, handleTabsControlClick] = useActiveValue(value);

  return (
    <button
      className={classNames('tabs__control', {'is-active': isActive})}
      type="button"
      role="tab"
      aria-controls={`panel-${value}`}
      aria-selected={isActive}
      tabIndex={isActive ? -1 : 0}
      onClick={handleTabsControlClick}
    >
      {children}
    </button>
  );
}

export default TabsControl;
