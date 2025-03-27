import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import LoginTemplate from "../../components/templates/LoginTemplate";

const LoginPage: React.FC = () => {
  return <LoginTemplate FormComponent={LoginForm} />;
};

export default LoginPage;
