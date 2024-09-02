import styles from './NextSongCard.module.scss';

type Props = {
    isActive?: boolean;
    arsitName: string;
    songName: string;
    onClick: () => void;
};

const NextSongCard = ({
    isActive = false,
    arsitName,
    songName,
    onClick,
}: Props) => {
    const defaultCard = styles.container;
    const activeCard = styles.containerActive;

    return (
        <div className={isActive ? activeCard : defaultCard} onClick={onClick}>
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
