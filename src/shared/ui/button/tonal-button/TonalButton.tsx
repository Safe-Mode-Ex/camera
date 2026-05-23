import classNames from 'classnames';
import type {MouseEvent, ReactNode} from 'react';

interface Props {
  children: ReactNode;
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

function TonalButton({className, children, onClick}: Props) {
  return (
    <button
      className={classNames('btn', className)}
      type="reset"
      onClick={onClick}
    >{children}
    </button>
  );
}

export default TonalButton;
