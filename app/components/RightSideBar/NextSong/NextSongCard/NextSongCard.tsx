import styles from './NextSongCard.module.scss';

type Props = {
    isActive?: boolean;
    arsitName: string;
    songName: string;
    onClick: () => void;
    image: string;
    className?: string;
};

const NextSongCard = ({
    isActive = false,
    arsitName,
    songName,
    onClick,
    image,
    className,
}: Props) => {
    const defaultCard = styles.container;
    const activeCard = styles.containerActive;

    return (
        <div
            className={`${isActive ? activeCard : defaultCard} ${className}`}
            onClick={onClick}
        >
            <div className={styles.circle}>
                <img src={image} alt="" draggable={false} />
            </div>
            <div>
                <p className={styles.name}>
                    {arsitName} - {songName}
                </p>
            </div>
        </div>
    );
};

export default NextSongCard;
