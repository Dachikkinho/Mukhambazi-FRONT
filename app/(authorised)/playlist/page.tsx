'use client'

import Playlist from "@/app/components/Playlists/Playlist";
import styles from "./page.module.scss";
import { useEffect } from "react";

export default function Playlistpage() {

  useEffect(() => {
    document.title= 'Chakrulos | Playlist '
  },[]);

  return (
    <main className={styles.main}>
        <Playlist />
    </main>
  );
}
