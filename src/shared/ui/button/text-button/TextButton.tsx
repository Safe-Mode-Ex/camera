import type {ReactNode} from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

function TextButton({href, children}: Props) {
  return (
    <a className="btn btn--transparent" href={href}>{ children }</a>
  );
}

export default TextButton;
