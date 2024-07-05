
import Album, { AlbumCard } from "./AlbumCard/AlbumCard";
import { ArtistCard } from "./ArtistCard/Artistcard";

import { TopHits } from "./TopHits/TopHits";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ArtistCard bgColor={"red"} name={"Irakli Charkviani"} plays={"2131321"} pfp={"ika"} />
    </main>
  );
}
