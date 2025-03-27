import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ disabled = true, ...props }) => {
  return (
    <button type="submit" className="btn" disabled={disabled} {...props}>
      Login
    </button>
  );
};

export default Button;
