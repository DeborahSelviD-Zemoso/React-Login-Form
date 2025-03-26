import "./LoginTemplate.css";

interface LoginTemplateProps {
  Form: React.ElementType;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ Form }) => {
  return (
    <div id="wrapper">
      <div id="form-wrapper">
        <Form></Form>
      </div>
    </div>
  );
};

export default LoginTemplate;
