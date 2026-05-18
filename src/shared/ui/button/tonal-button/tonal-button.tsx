import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function TonalButton({ children }: Props) {
  return (
    <button className="btn" type="reset">{ children }</button>
  );
}

export default TonalButton;
