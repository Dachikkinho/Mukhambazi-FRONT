'use client'

import { useRecoilState } from "recoil";
import styles from "./page.module.scss"

type AlbumsArtistsProps = {
    artistName: string;
    songs: string[];
    nationality: string;
    image: string;
    src: string[];
}

export const Albumsartistsv2 = ({ artistName, songs, nationality, image, src }: AlbumsArtistsProps) => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.albums}>
                <img className={styles.photo} src={image} alt="icon" />
                <div>{artistName}</div>{nationality}
            </div>
            <div className={styles.wrapper}>
                {songs.map((song, index) => (
                    <div key={index} className={styles.songs} >
                        <span></span>
                        <div className={styles.icon}>
                            <span>{song}</span>
                            <img className={styles.img} src="/images/play.png" alt="icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Albumsartistsv2;