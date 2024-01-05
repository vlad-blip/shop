import Container from "../../layouts/container/container";
import Navigation from "../navigation/navigation";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <Container>
      <header className={styles.header}>
        <img src="/icons/Logo.svg" alt="Back in time logo" />
        <Navigation />
      </header>
    </Container>
  );
}
