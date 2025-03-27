import "./LoginTemplate.css";

interface LoginTemplateProps {
  FormComponent: React.ComponentType;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ FormComponent }) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <FormComponent />
      </div>
    </div>
  );
};

export default LoginTemplate;
