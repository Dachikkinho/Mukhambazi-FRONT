
import Song from "./components/Song/Song";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Song songName={"Beliver"} artistName={"Imagine Dragon"} banner={"/images/Pink.png"} width={"180"} height={"160"} music={"1:59"}  />
    </main>
  );
}
