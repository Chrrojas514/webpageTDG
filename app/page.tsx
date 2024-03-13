import GameWindow from "./components/GameWindow";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <GameWindow />
      </div>
    </main>
  );
}
