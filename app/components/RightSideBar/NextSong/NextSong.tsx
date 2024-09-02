'use client';

import styles from './NextSong.module.scss';
import NextSongCard from './NextSongCard/NextSongCard';
import { isPlayingState, nextSongArrState } from '@/app/states';
import { useRecoilState } from 'recoil';

export function NextSong() {
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const nextSongArr = useRecoilState(nextSongArrState)[0];

    function setNextSong(index: number) {
        setIsPlaying(nextSongArr[index]);
    }

    return (
        <div className={styles.mainCont}>
            <div className={styles.heading}>
                <p>Next Songs</p>
                <img
                    src="/icons/voice-rec-square.svg"
                    alt="nextsong"
                    draggable={false}
                />
            </div>
            <div className={styles.container}>
                {nextSongArr
                    .filter(
                        (song, i) =>
                            i > isPlaying.index && i <= isPlaying.index + 3,
                    )
                    .map((song, i) => (
                        <NextSongCard
                            isActive={false}
                            arsitName={song.artistName}
                            songName={song.name}
                            key={i}
                            onClick={() => setNextSong(song.index)}
                        />
                    ))}
            </div>
        </div>
    );
}
