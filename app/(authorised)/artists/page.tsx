'use client'


import { ArtistsPage } from "@/app/components/Artists/Artists";
import styles from "./page.module.scss";
import { useEffect } from "react";

export default function Artists() {

  useEffect(() => {
    document.title= 'Chakrulos | Artists '
  },[]);

  return (
    <main className={styles.main}>
        <ArtistsPage />
    </main>
  );
}
