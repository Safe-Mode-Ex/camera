import type {InputType} from '@/shared/enums';
import './CustomInput.css';

interface Props {
  type: InputType;
  name: string;
  placeholder: string;
}

function CustomInput({type, name, placeholder}: Props) {
  return (
    <div className="custom-input">
      <label>
        <span className="visually-hidden">{placeholder}</span>
        <input type={type} name={name} placeholder={placeholder} />
      </label>
    </div>
  );
}

export default CustomInput;
