import type {ChangeEvent} from 'react';
import type {InputType} from '@/shared/enums';
import './CustomInput.css';

interface Props {
  type: InputType;
  name: string;
  placeholder: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({type, name, placeholder, onChange}: Props) {
  return (
    <div className="custom-input">
      <label>
        <span className="visually-hidden">{placeholder}</span>
        <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
      </label>
    </div>
  );
}

export default CustomInput;
