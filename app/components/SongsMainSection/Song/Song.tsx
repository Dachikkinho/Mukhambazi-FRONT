import AddSongButton from '../../AddSongButton/AddSongButton';
import LikeButton from '../../LikeButton/LikeButton';
import styles from './Song.module.scss';

type Props = {
    name: string;
    group: string;
    length: string;
    imageSrc: string;
    onClick?: () => void;
};

const Song = ({ name, group, length, imageSrc, onClick }: Props) => {
    return (
        <div className={styles.container}>
            <img
                src={imageSrc}
                alt="song cover"
                className={styles.imagePlaceHolder}
                draggable={false}
            />
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.name}>{group}</p>
                <div className={styles.infoBottom}>
                    <p className={styles.name}>{length}</p>
                    <button className={styles.play} onClick={onClick}>
                        Play Now
                    </button>
                </div>
            </div>
            <div className={styles.add}>
                <AddSongButton />
            </div>
            <div className={styles.like}>
                <LikeButton />
            </div>
        </div>
    );
};

export default Song;
