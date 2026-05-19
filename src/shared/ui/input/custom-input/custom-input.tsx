import { InputType } from '../../../enums';
import './custom-input.css';

type Props = {
  type: string;
  name: string;
  placeholder: string;
};

function CustomInput({ type = InputType.text, name, placeholder }: Props) {
  return (
    <div className="custom-input">
      <label>
        <input type={type} name={name} placeholder={placeholder} />
      </label>
    </div>
  );
}

export default CustomInput;
