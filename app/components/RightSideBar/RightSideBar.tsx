import { CurrentListening } from './CurrentListening/CurrentListening';
import { NextSong } from './NextSong/NextSong';
import { RightBarNav } from './RightBarNav/RightBarNav';
import styles from './RightSideBar.module.scss';

export function RightSideBar() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <RightBarNav />
                <CurrentListening musicName="Music" />
                <NextSong />
            </div>
        </div>
    );
}
