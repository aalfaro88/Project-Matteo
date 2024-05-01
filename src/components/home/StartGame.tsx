import Link from "next/link";
import styles from "./StartGame.module.css";

const StartGame = () => (
  <div className={styles.container}>
    <Link href="/game">
      <button className={styles.button}>Start Game</button>
    </Link>
    <div className={styles.linkContainer}>
      <Link href="/rules">
        <button className={styles.linkButton}>How to play?</button>
      </Link>
    </div>
  </div>
);

export default StartGame;
