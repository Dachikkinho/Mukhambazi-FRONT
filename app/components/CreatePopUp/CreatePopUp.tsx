import { useEffect, useState } from "react";
import styles from "./CreatePopUp.module.scss"
import { useForm } from "react-hook-form"
import axios from "axios";

interface Album {
    name: string;
    description: string;
}

interface Props {
    closeMenuFunction: () => void;
}

export function CreatePopUp({closeMenuFunction}: Props) {

    const {reset, register, formState: {errors}, handleSubmit} = useForm<Album>()
    const [success, setSuccess] = useState(false);

    function onSubmit(album: Album) {
        axios.post('http://localhost:3001/playlist', album).then(res => {
            reset()
            closeMenuFunction()
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

        <div className={styles.overlay} onClick={closeMenuFunction}></div>
        <div className={styles.mainContainer}>
            <h2 className={styles.heading}>New playlist</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.row}>
                    <input id="name" type="text" className={styles.input} placeholder="Playlist Name" {...register("name", {
                        required: {value: true, message: "Name Is Required!"},
                        maxLength: {value: 255, message: "Name Can't Be Longer Than 255 Characters!"}
                    })}/>
                    {errors.name?.message && <p className={styles.error}>{errors.name.message}</p>}
                </div>
                <div className={styles.row}>
                    <input id="description" type="text" className={styles.input} placeholder="Playlist Description" {...register("description", {
                        maxLength: {value: 500, message: "Description Can't Be Longer Than 500 Characters!"}
                    })}/>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.cancel} onClick={closeMenuFunction}>Cancel</button>
                    <button className={styles.create} type="submit">Create</button>
                </div>
            </form>
        </div>
        </>
    )
}