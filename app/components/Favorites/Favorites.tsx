'use client'
import styles from "./Favorites.module.scss"
import { Search } from "../Header/Search/Search";
import { FavoriteBanner } from "./FavoriteBanner/FavoriteBanner";
import { songs } from "@/public/script";

export const Favorites = () => {
    return (
       <div className={styles.container}>
            <div className={styles.SearchBar}>
                <Search placeholder={"Enter keywords to search"} icon={"search"} width={24} height={24} />
            </div>
            <div className={styles.Title}>
                <div className={styles.headingCont}>
                    <h5 className={styles.heading}>Favorites</h5>
                    <img src="/icons/songs-heading-icon.svg" alt="icon" />
                </div>
            </div>
            <div className={styles.Songs}>
                {songs.map((song, i) => (
                    <FavoriteBanner title={song.name} banner={song.image} id={i}/>
                ))}
            </div>
       </div>
    )
}