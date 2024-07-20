'use client'

import styles from "./page.module.scss";
import { useEffect } from "react";
import AlbumsPage from "../albums/page";




export default function albumArtist() {
  useEffect(() => {
    document.title= 'Chakrulos | Artist'
  },[]);
  return (
    <main className={styles.main}>
      <AlbumsPage />
    </main>
  );
}
