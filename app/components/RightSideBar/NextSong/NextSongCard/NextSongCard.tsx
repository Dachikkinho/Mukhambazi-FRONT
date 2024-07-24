import styles from './NextSongCard.module.scss';

type Props = {
    isActive?: boolean;
    arsitName: string;
    songName: string;
};

const NextSongCard = ({ isActive = false, arsitName, songName }: Props) => {
    const defaultCard = styles.container;
    const activeCard = styles.containerActive;

    return (
        <div className={isActive ? activeCard : defaultCard}>
            {/* image placeholder */}
            <div className={styles.circle}></div>
            <div>
                <p className={styles.name}>
                    {arsitName} - {songName}
                </p>
            </div>
        </div>
    );
};

export default NextSongCard;
