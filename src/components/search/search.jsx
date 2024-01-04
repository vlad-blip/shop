import styles from "./styles.module.css";

export default function Search() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <img src="/icons/Search.svg" alt="Search icon" />
      </button>
      <input className={styles.input} type="search" />
    </div>
  );
}
