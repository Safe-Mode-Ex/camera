import type {ReactNode} from 'react';
import {Link} from 'react-router-dom';

interface Props {
  href: string;
  children: ReactNode;
}

function TextButton({href, children}: Props) {
  return (
    <Link className="btn btn--transparent" to={href}>{ children }</Link>
  );
}

export default TextButton;
