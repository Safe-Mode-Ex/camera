import classNames from 'classnames';
import './custom-checkbox.css';

type Props = {
  name: string;
  label: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
};

function CustomCheckbox({ name, label, className, checked = false, disabled = false }: Props) {
  return (
    <div className={classNames('custom-checkbox', className)}>
      <label>
        <input type="checkbox" name={name} defaultChecked={checked} disabled={disabled} />
        <span className="custom-checkbox__icon"></span>
        <span className="custom-checkbox__label">{ label }</span>
      </label>
    </div>
  );
}

export default CustomCheckbox;
