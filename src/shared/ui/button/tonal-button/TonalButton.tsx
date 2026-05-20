import classNames from 'classnames';
import type {ReactNode} from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

function TonalButton({className, children}: Props) {
  return (
    <button className={classNames('btn', className)} type="reset">{ children }</button>
  );
}

export default TonalButton;
