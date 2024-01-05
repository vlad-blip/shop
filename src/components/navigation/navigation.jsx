import { Link } from "react-router-dom";
import Search from "../search/search";

import styles from "./styles.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.nav_links}>
        <li>
          <Link className={styles.link} to={"/news_arrivals"}>
            New arrivals
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={"/catalogue"}>
            Каталог
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={"/sale"}>
            SALE
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={"/contacts"}>
            Контакти
          </Link>
        </li>
        <li>
          <Search />
        </li>
        <li>
          <Link className={styles.link} to={"/personal_page"}>
            <img src="/icons/Person.svg" alt="Person icon" />
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={"/cart"}>
            <img src="/icons/Bag-outline.svg" alt="Bag icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
