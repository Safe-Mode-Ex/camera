import type {ChangeEvent} from 'react';
import classNames from 'classnames';
import './CustomRadio.css';

interface Props {
  name: string;
  value: string;
  label: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  className?: string;
}

function CustomRadio({name, value, label, className, onChange, checked = false}: Props) {
  return (
    <div className={classNames('custom-radio', className)}>
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className="custom-radio__icon" />
        <span className="custom-radio__label">{ label }</span>
      </label>
    </div>
  );
}

export default CustomRadio;
