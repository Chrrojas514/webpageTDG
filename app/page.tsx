import ClearCanvasButton from "./components/ClearCanvasButton";
import GameWindow from "./components/GameWindow";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <meta charSet="utf-8"></meta>
      <title>Tower defense game?</title>
      <h1 className={styles.gameHeader}>Learning Canvas API with React in Next.js Framework!</h1>
      <div className={styles.canvas_container}>
        <GameWindow />
        <ClearCanvasButton />
      </div>
    </main>
  );
}
