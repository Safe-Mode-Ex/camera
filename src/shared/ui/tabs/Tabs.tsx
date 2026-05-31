import type {ReactNode} from 'react';
import classNames from 'classnames';
import {TabsContext, useContextValue} from './hooks';
import TabsControls from './tabs-controls/TabsControls';
import TabsControl from './tabs-control/TabsControl';
import TabsContent from './tabs-content/TabsContent';
import TabsElement from './tabs-element/TabsElement';
import './Tabs.css';

interface Props {
  children: ReactNode;
  defaultValue: string;
  className: string;
}

function Tabs({children, defaultValue, className}: Props) {
  const contextValue = useContextValue(defaultValue);

  return (
    <TabsContext value={contextValue}>
      <div className={classNames('tabs', className)}>
        {children}
      </div>
    </TabsContext>
  );
}

Tabs.Controls = TabsControls;
Tabs.Control = TabsControl;
Tabs.Content = TabsContent;
Tabs.Element = TabsElement;

export default Tabs;
