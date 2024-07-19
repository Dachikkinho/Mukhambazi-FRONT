import styles from "./NextSongCard.module.scss"

type Props = {
    isActive?: boolean;
    arsitName: string;
    songName: string;
    id: number;
}

export function NextSongCard ({isActive, arsitName, songName, id}: Props) {
    const defaultCard = styles.container;
    const activeCard = styles.containerActive;

    return (
        <div className={`${isActive ? activeCard : defaultCard}`} key={id}>
            {/* image place holder */}
            <div className={styles.circle}></div>
            <div>
                <p className={styles.name}>{arsitName} - {songName}</p>                   
            </div>
        </div>
    )
}