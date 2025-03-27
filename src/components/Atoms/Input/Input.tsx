import { ChangeEventHandler } from "react";

import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  type?: string;
  name?: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type = "text",
  name,
  handleInput,
  ...props
}) => {
  const inputName = name || label.toLowerCase().replace(/\s+/g, "");
  return (
    <div className="input-wrapper">
      <div>
        <label htmlFor={inputName}>{label}</label>
      </div>
      <div>
        <input
          id={inputName}
          name={inputName}
          type={type}
          value={value}
          onChange={handleInput}
          className="input"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
