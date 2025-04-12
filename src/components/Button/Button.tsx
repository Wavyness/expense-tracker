import styles from "./Button.module.css";

interface Props {
  children: string;
  onClickHandler: () => void;
  color?: "primary" | "secondary";
}

const Button = ({ children, onClickHandler, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
