import type {ChangeEvent, FocusEvent} from 'react';
import type {InputType} from '@/shared/enums';
import './CustomInput.css';

interface Props {
  type: InputType;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (evt: FocusEvent<HTMLInputElement>) => void;
}

function CustomInput({type, name, value, placeholder, onChange, onBlur}: Props) {
  return (
    <div className="custom-input">
      <label>
        <span className="visually-hidden">{placeholder}</span>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
    </div>
  );
}

export default CustomInput;
