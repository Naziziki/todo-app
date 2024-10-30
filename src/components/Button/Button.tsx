import "./Button.style.css";

type ButtonType = {
  label: string;
};

function Button({ label }: ButtonType) {
  return <button className="button-blue"> {label} </button>;
}

export default Button;
