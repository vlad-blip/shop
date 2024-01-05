import clsx from "clsx";
import Container from "../../../../../layouts/container/container";
import Button from "../../../../../components/button/button";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <section className={styles.container}>
      <Container>
        <h1 className={clsx("heading-1", styles.heading_main)}>
          Машина часу
          <span className={styles.heading_sub}>
            в твоєму <b>гардеробі</b>
          </span>
        </h1>
        <Button type={"primary"} size={"normal"} onClick={() => {}}>
          Обирати
        </Button>
      </Container>
    </section>
  );
}
