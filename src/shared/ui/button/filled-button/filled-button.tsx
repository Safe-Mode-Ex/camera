import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function FilledButton({ children }: Props) {
  return (
    <button className="btn btn--purple" type="button">
      {children}
    </button>
  );
}

export default FilledButton;
