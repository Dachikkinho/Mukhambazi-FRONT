import { nextSongPlaceholder } from "@/public/script"
import styles from "./NextSong.module.scss"
import { NextSongCard } from "./NextSongCard/NextSongCard"

export function NextSong() {
    return (
        <div className={styles.mainCont}>
            <div className={styles.heading}>
                <p>Next Songs</p>
                <img src="/icons/voice-rec-square.svg" alt="" />
            </div>
            <div className={styles.container}>
                {nextSongPlaceholder.map(song => (
                    <NextSongCard isActive={song.isActive} arsitName={song.artistName} songName={song.songName}/>
                ))}
            </div>
        </div>
    )
}