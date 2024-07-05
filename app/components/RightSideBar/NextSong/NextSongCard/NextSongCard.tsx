import styles from "./NextSongCard.module.scss"

type Prop = {
    isActive?: boolean;
    arsitName: string;
    songName: string;
}

export function NextSongCard ({isActive, arsitName, songName}: Prop) {
    const normalCard = styles.container;
    const activeCard = styles.containerActive;

    return (
        <div className={`${isActive ? activeCard : normalCard}`}>
            {/* image place holder */}
            <div className={styles.circle}></div>
            <div>
                <p className={styles.name}>{arsitName} - {songName}</p>                   
            </div>
        </div>
    )
}