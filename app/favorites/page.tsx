'use client'

import styles from "./page.module.scss";
import { useEffect } from "react";
import { Favorites } from "../components/Favorites/Favorites";



export default function Artists() {
  useEffect(() => {
    document.title= 'Chakrulos | Albums'
  },[]);

  return (
    <main className={styles.main}>
      <Favorites />
    </main>
  );
}
