import clsx from "clsx";
import { useState } from "react";

import styles from "./styles.module.css";

export default function Search() {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={clsx(styles.button, active && styles.active)}
        onClick={() => setActive((prevActive) => !prevActive)}
      >
        <img src="/icons/Search.svg" alt="Search icon" />
      </button>
      <input
        className={clsx(styles.input, active && styles.active)}
        type="search"
      />
    </div>
  );
}
