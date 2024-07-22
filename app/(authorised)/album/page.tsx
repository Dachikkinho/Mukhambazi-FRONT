'use client'

import styles from "./page.module.scss";
import { useEffect } from "react";
import AlbumsPage from "../albums/page";
import { useSearchParams } from "next/navigation";
import { albums } from "@/public/script";


interface Album {
  name: string;
  lastName: string;
  plays: string;
  image: string;
  id: number;
  songs: string[],
  nationality: string
}

export default function albumArtist() {


  useEffect(() => {
    document.title= 'Chakrulos | Artist'
  },[]);

  const param = useSearchParams();
  const id = param.get("id") || 1;

const albumPage: Album = albums.filter(album => album.id === +id)[0];

console.log(albumPage);


  return (
    <main className={styles.main}>
          <div className={styles.mainContainer}>
            <div className={styles.albums}>
                <img className={styles.photo} src={albumPage.image} alt="icon" />
                <div>{albumPage.name} {albumPage.lastName}</div>{albumPage.nationality}
            </div>
            <div className={styles.wrapper}>
            {albumPage.songs.map((song, index) => (
                    <div key={index} className={styles.songs}>
                        <span></span>
                        <div className={styles.icon}>
                            <span>{song}</span>
                            <img className={styles.img} src="/images/play.png" alt="icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </main>
  );
}
