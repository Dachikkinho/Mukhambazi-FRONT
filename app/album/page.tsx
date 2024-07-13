'use client'

import styles from "./page.module.scss";
import { useEffect } from "react";
import Albumsssv2 from "../components/Albumsssv2/page";




export default function albumArtist() {
  useEffect(() => {
    document.title= 'Chakrulos | Artist'
  },[]);
  return (
    <main className={styles.main}>
      <Albumsssv2 />
    </main>
  );
}
