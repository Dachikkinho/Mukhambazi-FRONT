import styles from './PlaylistSongCard.module.scss';

type Props = {
    onClick: () => void;
    name: string;
};

const PlaylistSongCard = ({ onClick, name }: Props) => {
    return (
        <div className={styles.songs} onClick={onClick}>
            <div className={styles.icon}>
                <span>{name}</span>
                <img className={styles.img} src="/images/play.png" alt="icon" />
            </div>
        </div>
    );
};

export default PlaylistSongCard;
