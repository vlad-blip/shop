import propTypes from "prop-types";
import clsx from "clsx";

import styles from "./styles.module.css";

export default function Button({ type, size, onClick, children }) {
  return (
    <button
      className={clsx(styles.button, styles[type], styles[size])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf("primary", "secondary", "tertiary").isRequired,
  size: propTypes.oneOf("normal", "small").isRequired,
  onClick: propTypes.func.isRequired,
  children: propTypes.string.isRequired,
};
