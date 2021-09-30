import css from "./style.module.css";

export function Button({ onClick, title }) {
  return (
    <button onClick className={css.buttonClick}>
      {title}
    </button>
  );
}
