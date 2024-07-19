import styles from "./SongsMainSection.module.scss"
import { Song } from "./Song/Song"
import { Search } from "../Header/Search/Search"
import { songs } from "@/public/script"


export function SongsMainSection() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <Search placeholder={"Enter keywords to search"} icon={"search"} width={24} height={24} />
            </div>
            <div>
                <div className={styles.headingCont}>
                    <h5 className={styles.heading}>Songs</h5>
                    <img src="/icons/note-circle.svg" alt="icon" />
                </div>
                <div className={styles.songs}>
                    {songs.map((song, i) => (
                        <Song name={song.name} group={song.group} length={song.length} imageSrc={song.image} id={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}