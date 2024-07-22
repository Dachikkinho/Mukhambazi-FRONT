'use client'

import { SongsMainSection } from "@/app/components/SongsMainSection/SongsMainSection";
import styles from "./page.module.scss";
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
