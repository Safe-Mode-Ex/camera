import {createContext, use} from 'react';

const ERROR_MESSAGE = 'useTabsContext должен использоваться внутри компонента Tabs';

interface TabsContextValue {
  activeValue: string;
  setActiveValue: (value: string) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export const useTabsContext = (): TabsContextValue => {
  const context = use(TabsContext);
  if (!context) {
    throw new Error(ERROR_MESSAGE);
  }
  return context;
};
