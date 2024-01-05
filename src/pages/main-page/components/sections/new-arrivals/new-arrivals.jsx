import Container from "../../../../../layouts/container/container";
import Category from "./category/category";

import styles from "./styles.module.css";

export default function NewArrivals() {
  return (
    <section className={styles.container}>
      <Container>
        <ul className={styles.categories}>
          <li>
            <Category name={"New arrivals"} link="/new_arrivals" />
          </li>
          <li>
            <Category name={"Sale"} link="/sale" />
          </li>
          <li>
            <Category name={"Каталог"} link="catalogue" />
          </li>
        </ul>
      </Container>
    </section>
  );
}
