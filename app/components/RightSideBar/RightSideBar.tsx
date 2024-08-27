import { isPlayingState } from '@/app/states';
import { useRecoilState } from 'recoil';
import { CurrentListening } from './CurrentListening/CurrentListening';
import { NextSong } from './NextSong/NextSong';
import { RightBarNav } from './RightBarNav/RightBarNav';
import styles from './RightSideBar.module.scss';

export function RightSideBar() {
    const isPlaying = useRecoilState(isPlayingState)[0];
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <RightBarNav />
                <CurrentListening musicName={isPlaying.name || 'Nothing'} />
                <NextSong />
            </div>
        </div>
    );
}

//arc aq shveba
