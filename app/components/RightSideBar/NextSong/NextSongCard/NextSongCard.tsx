import styles from "./NextSongCard.module.scss"

type Props = {
    isActive?: boolean;
    arsitName: string;
    songName: string;
}

export function NextSongCard ({isActive, arsitName, songName}: Props) {
    const defaultCard = styles.container;
    const activeCard = styles.containerActive;

    return (
        <div className={`${isActive ? activeCard : defaultCard}`}>
            {/* image place holder */}
            <div className={styles.circle}></div>
            <div>
                <p className={styles.name}>{arsitName} - {songName}</p>                   
            </div>
        </div>
    )
}