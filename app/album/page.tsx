'use client'

import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Albumsssv2 from "../components/Albumsssv2/page";




export default function Albumssec() {
  useEffect(() => {
    document.title= 'Chakrulos | Albumssec'
  },[]);
  return (
    <main className={styles.main}>
      <Albumsssv2 />
    </main>
  );
}
