import type {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

function TabsContent({children}: Props) {
  return (
    <div className="tabs__content">
      {children}
    </div>
  );
}

export default TabsContent;
