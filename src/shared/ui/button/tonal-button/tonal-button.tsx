import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

function TonalButton({ className, children }: Props) {
  return (
    <button className={classNames('btn', className)} type="reset">{ children }</button>
  );
}

export default TonalButton;
