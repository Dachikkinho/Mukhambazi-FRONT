import { LikeButton } from "../../LikeButton/LikeButton";
import styles from "./Song.module.scss"

type Props = {
    name: string;
    group: string;
    length: string;
    imageSrc: string;
    id: number
}

export function Song({name, group, length, imageSrc, id}: Props) {
    return (
        <div className={styles.container} key={id}>
            <img src={imageSrc} alt="song cover" className={styles.imagePlaceHolder}/>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.name}>{group}</p>
                <div className={styles.infoBottom}>
                    <p className={styles.name}>{length}</p>
                    <button className={styles.play}>Play Now</button>
                </div>
            </div>
            <div className={styles.like}>
                <LikeButton />
            </div>
        </div>
    )
}