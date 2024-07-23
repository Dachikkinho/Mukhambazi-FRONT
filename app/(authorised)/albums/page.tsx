'use client'


import Albums from "@/app/components/Albums/Albums";
import styles from "./page.module.scss";
import { useEffect } from "react";

export default function Albumspage() {

  useEffect(() => {
    document.title= 'Chakrulos | Albums '
  },[]);

  return (
    <main className={styles.main}>
        <Albums/>
    </main>
  );
}
