import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import LoginTemplate from "../../components/Templates/LoginTemplate";

const LoginPage: React.FC<{}> = () => {
  return <LoginTemplate Form={LoginForm} />;
};

export default LoginPage;
