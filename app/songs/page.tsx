'use client'

import styles from "./page.module.scss";
import { SongsMainSection } from "../components/SongsMainSection/SongsMainSection";
import { useEffect } from "react";

export default function Songs() {

  useEffect(() => {
    document.title= 'Chakrulos | Songs'
  },[]);

  return (
    <main className={styles.main}>
      <SongsMainSection />
    </main>
  );
}
