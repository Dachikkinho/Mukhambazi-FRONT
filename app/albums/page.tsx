'use client'

import Albums from "../components/Albums/Albums";
import { ArtistsPage } from "../components/Artists/Artists";
import styles from "./page.module.scss";
import { useEffect } from "react";

export default function AlbumsPage() {

  useEffect(() => {
    document.title= 'Chakrulos | Albums '
  },[]);

  return (
    <main className={styles.main}>
        <Albums/>
    </main>
  );
}
