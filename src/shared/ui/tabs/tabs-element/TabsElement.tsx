import type {ReactNode} from 'react';
import {useTabsContext} from '../hooks';
import classNames from 'classnames';

interface Props {
  value: string;
  children: ReactNode;
}

function TabsElement({value, children}: Props) {
  const {activeValue} = useTabsContext();
  const isActive = activeValue === value;

  return (
    <div
      className={classNames('tabs__element', {'is-active': isActive})}
      role="tabpanel"
      aria-labelledby={`tab-${value}`}
      hidden={!isActive}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default TabsElement;
