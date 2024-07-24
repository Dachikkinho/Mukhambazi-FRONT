import { useEffect, useState } from "react"
import styles from "./AddSongButton.module.scss"
import Listdisabled from "../Playlists/ListDisabled";
import axios from "axios";

interface Album {
    id: number;
    name: string;
    description: string;
}

interface Props {
    songId: string;
}

export function AddSongButton({songId}: Props) {

    const [open, setOpen] = useState(false);
    const [playlists, setPlaylists] = useState<Album[]>([])
    const [success, setSuccess] = useState(false);

    function openPopUp() {
        setOpen(!open)
    }

    // place holder upload function

    function upload(id: number) {
        axios.patch(`upload Link`, songId).then(res => {
            setOpen(false)
            setSuccess(true)
        })
    }

    useEffect(() => {
        if (success) {
          const timer = setTimeout(() => {
            setSuccess(false);
          }, 2000);
    
          return () => clearTimeout(timer);
        }
      }, [success]);
    
    return (
        <>
        {success && <div className={styles.success}>
            Added Succesfully!
        </div>}

        <button className={styles.button} onClick={openPopUp}>
            <img src="/icons/add-song.svg" alt="" className={styles.icon}/>
        </button>

        {open 
        &&
        <> 
        <div className={styles.overlay} onClick={openPopUp}></div>
        <div className={styles.popUp}>
            <div className={styles.top}>
                <h2>All Playlists</h2>
                <button onClick={openPopUp} className={styles.close}>
                    <img src="/icons/close-icon.svg" alt="" className={styles.closeIcon}/>
                </button>
            </div>

            <div>
                <div className={styles.playlist}>
                    <div onClick={() => {upload(0)}}>
                        <Listdisabled title={"nme"} date={"desc"} icon="green" playbtn="play" className={styles.add}/>
                    </div>
                </div>
            </div>
        </div>
        </>}
        </>
    )
}