import { ChangeEvent, useState } from "react";

import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import "./LoginForm.css";

const LoginForm: React.FC<{}> = () => {
  let [userName, setUserName] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let [userValid, setUserValid] = useState<boolean>(false);
  let [passwordValid, setPasswordValid] = useState<boolean>(false);

  const handleInputUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    const regEx = /^(?![_.])[a-zA-Z0-9_.]{3,16}(?<![_.])$/;
    console.log(event.target.value);
    console.log(regEx.test(event.target.value));
    setUserValid(regEx.test(event.target.value));
  };
  const handleInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    const regEx = /^[a-zA-Z0-9_.@#$%^&*]{6,16}$/;
    setPasswordValid(regEx.test(event.target.value));
  };
  return (
    <form>
      <Input
        text="User Name"
        value={userName}
        handleInput={handleInputUserName}
      ></Input>
      <Input
        text="Password"
        value={password}
        handleInput={handleInputPassword}
      ></Input>
      <div className="submit-wrapper">
        <Button disabled={!userValid || !passwordValid}></Button>
      </div>
    </form>
  );
};

export default LoginForm;
