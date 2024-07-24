'use client'
import { useEffect, useState } from "react";
import { CreatePopUp } from "../CreatePopUp/CreatePopUp";
import Header from '../Header/Header';
import Search from '../Header/Search/Search';
import Listactivate from './ListActivate';
import Listdisabled from './ListDisabled';
import styles from './Playlist.module.scss';

interface Album {
    name: string;
    description: string;
}

export default function Playlist() {

    const [create, setCreate] = useState(false)
    const [playlists, setPlaylists] = useState<Album[]>([])
    return (
        <>
            {create && <CreatePopUp closeMenuFunction={() => {setCreate(false)}}/>}
            <div className={styles.mainContainer}>
                <div className={styles.search}>
                    <Search placeholder={"Enter keywords to search"} icon={"search"} width={24} height={24} />
                </div>
                <div className={styles.container}>
                    <Header title={"Playlists"} icon={"my-playlists-icon"} width={24} height={24} />
                    <button onClick={() => setCreate(true)} className={styles.newPlaylist}>
                        <img src="/icons/add-icon.svg" alt="add" />
                        New Playlist
                    </button>
                </div>

                {/* Placeholder Until Backend is ready. */}
                <div className={styles.playlist}>
                    <Listactivate title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                    <Listdisabled title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                    <Listdisabled title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                    <Listdisabled title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                    <Listdisabled title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                    <Listdisabled title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                    <Listdisabled title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                    <Listdisabled title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                    <Listdisabled title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                    <Listdisabled title={"Jansug Kakhidze - Songs"} date={"1960-2016"} icon={"green"} playbtn={"play"} />
                </div>
        </div>
        </>
    )

}