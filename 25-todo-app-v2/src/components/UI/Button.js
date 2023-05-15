import styles from "./Button.module.css";

// Первый вариант записи
// const Button = ({ onClick, children, title, disabled = false }) => {
//   return (
//     <button
//       className={styles.button}
//       onClick={onClick}
//       title={title}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

// Второй вариант записи при передаче дополнительных параметров
// const Button = (props) => {
//   const { onClick, children, title, disabled = false } = props;
//   return (
//     <button
//       {...props}
//       className={styles.button}
//       onClick={onClick}
//       title={title}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

// Третий вариат записи - сокращенный вариант Второго варианта записи
const Button = (props) => {
  const { children, disabled = false } = props;
  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
