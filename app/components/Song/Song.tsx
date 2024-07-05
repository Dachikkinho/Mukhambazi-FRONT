
import PlayNowButton from "./PlayNow/PlayNow";
import styles from "./Song.module.scss";

type Props = {
    songName: string;
    artistName: string;
    banner: string;
    width: string;
    height: string;
    music: string;
}

export default function Song({songName, artistName, banner, width, height, music}: Props) {
  return (
    <main className={styles.Container}>
        <img src={banner} alt="banner" width={width} height={height}/>
        <div className={styles.Text}>
            <h4 className={styles.SongName}>{songName}</h4>
            <h5 className={styles.ArtistName}>{artistName}</h5>
            <div className={styles.MusicPlay}>
                <h4 className={styles.Music}>{music}</h4>
                <PlayNowButton />
            </div>
        </div>
    </main>
  );
}
