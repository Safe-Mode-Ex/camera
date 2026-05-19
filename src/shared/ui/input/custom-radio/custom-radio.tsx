import classNames from 'classnames';
import './custom-radio.css';

type Props = {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  className?: string;
};

function CustomRadio({ name, value, label, className, checked = false }: Props) {
  return (
    <div className={classNames('custom-radio', className)}>
      <label>
        <input type="radio" name={name} value={value} defaultChecked={checked} />
        <span className="custom-radio__icon"></span>
        <span className="custom-radio__label">{ label }</span>
      </label>
    </div>
  );
}

export default CustomRadio;
