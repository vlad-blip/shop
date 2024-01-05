import Layout from "../../layouts/layout";
import Header from "./components/sections/header/header";
import NewArrivals from "./components/sections/new-arrivals/new-arrivals";

import styles from "./styles.module.css";

export default function MainPage() {
  return (
    <Layout>
      <main className={styles.container}>
        <Header />
        <NewArrivals />
      </main>
    </Layout>
  );
}
