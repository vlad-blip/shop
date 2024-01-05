import PropTypes from "prop-types";

import styles from "./styles.module.css";

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
Container.propTypes = {
  children: PropTypes.element,
};
