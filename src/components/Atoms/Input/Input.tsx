import { ChangeEventHandler } from "react";

import "./Input.css";

interface InputProps {
  text: string;
  value: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ text, value, handleInput }) => {
  return (
    <div id="input-wrapper">
      <div>
        <label htmlFor={text}>{text}</label>
      </div>
      <div>
        <input id={text} value={value} onChange={handleInput} />
      </div>
    </div>
  );
};

export default Input;
