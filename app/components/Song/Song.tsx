import PlayNowButton from './PlayNow/PlayNow';
import styles from './Song.module.scss';

type Props = {
    songName: string;
    artistName: string;
    banner: string;
    width: string;
    height: string;
    duration: string;
};

const Song = ({
    songName,
    artistName,
    banner,
    width,
    height,
    duration,
}: Props) => {
    return (
        <main className={styles.Container}>
            <img src={banner} alt="banner" width={width} height={height} draggable={false} />
            <div className={styles.Text}>
                <h4 className={styles.SongName}>{songName}</h4>
                <h5 className={styles.ArtistName}>{artistName}</h5>
                <div className={styles.MusicPlay}>
                    <h4 className={styles.Music}>{duration}</h4>
                    <PlayNowButton />
                </div>
            </div>
        </main>
    );
};

export default Song;
