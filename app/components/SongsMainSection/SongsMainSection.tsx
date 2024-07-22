import styles from "./SongsMainSection.module.scss"
import { Song } from "./Song/Song"
import { Search } from "../Header/Search/Search"
import { songs } from "@/public/script"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRecoilState } from "recoil"
import { musicState } from "@/app/states"


export function SongsMainSection() {

    const [music,setMusic] = useRecoilState(musicState)

    
    useEffect (() => {
        axios.get(`http://localhost:3001/music`)
        .then(result => {
            setMusic(result.data)
        })
        .catch(() => {
            setMusic([])
        })
      }
    )

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
                    {music.map((song) => (
                        <Song name={song.name} imageSrc={song.image}/>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}