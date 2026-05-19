import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

function FilledButton({ className, children }: Props) {
  return (
    <button className={classNames('btn btn--purple', className)} type="button">
      {children}
    </button>
  );
}

export default FilledButton;
