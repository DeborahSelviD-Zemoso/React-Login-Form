import { ChangeEvent, useState } from "react";

import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import "./LoginForm.css";

type FormData = {
  username: string;
  password: string;
  usernameValid: boolean;
  passwordValid: boolean;
};

const LoginForm: React.FC = () => {
  let [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    usernameValid: false,
    passwordValid: false,
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>, name: string) => {
    const regExValidation: Record<string, RegExp> = {
      username: /^(?![_.])[a-zA-Z0-9_.]{3,16}(?<![_.])$/,
      password: /^[a-zA-Z0-9_.@#$%^&*]{6,16}$/,
    };

    setFormData((prevForm: FormData) => ({
      ...prevForm,
      [name]: event.target.value,
      [`${name}Valid`]: regExValidation[name].test(event?.target.value),
    }));
  };

  return (
    <form>
      <Input
        label="User Name"
        type="text"
        value={formData.username}
        handleInput={(e) => handleInput(e, "username")}
      ></Input>
      <Input
        label="Password"
        type="password"
        value={formData.password}
        handleInput={(e) => handleInput(e, "password")}
      ></Input>
      <div className="submit-wrapper">
        <Button
          disabled={!formData.usernameValid || !formData.passwordValid}
        ></Button>
      </div>
    </form>
  );
};

export default LoginForm;
