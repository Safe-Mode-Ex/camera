import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

function OutlinedButton({ href, children }: Props) {
  return (
    <a className="btn btn--purple-border" href={href}>
      { children }
    </a>
  );
}

export default OutlinedButton;
