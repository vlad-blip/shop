import propTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export default function Category({ img, name, link }) {
  return (
    <Link to={link}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={img}
          alt={`${name}`}
          width={348}
          height={408}
        />
        <h4 className={clsx(styles.name, "heading-4")}>{name}</h4>
      </div>
    </Link>
  );
}

Category.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};
