import Link from "next/link";
import styles from "./MainMenu.module.css";

const MainMenu = () => (
  <div className={styles.container}>
    <Link href="/presentation">
      <button className={styles.button}>Create Project</button>
    </Link>
  </div>
);

export default MainMenu;
