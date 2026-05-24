import type {ChangeEvent} from 'react';
import classNames from 'classnames';
import './CustomCheckbox.css';

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
}

function CustomCheckbox({name, label, value, className, onChange, checked = false, disabled = false}: Props) {
  return (
    <div className={classNames('custom-checkbox', className)}>
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className="custom-checkbox__icon" />
        <span className="custom-checkbox__label">{ label }</span>
      </label>
    </div>
  );
}

export default CustomCheckbox;
