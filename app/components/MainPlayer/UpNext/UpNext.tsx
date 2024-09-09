import { SetStateAction } from 'react';
import styles from './UpNext.module.scss';
import { isPlayingState, nextSongArrState } from '@/app/states';
import { useRecoilState } from 'recoil';
import NextSongCard from '../../RightSideBar/NextSong/NextSongCard/NextSongCard';

type Props = {
    switchNextUp: () => void;
    setOpen: (value: SetStateAction<boolean>) => void;
    open: boolean;
    upNext: boolean;
    setNextSong: (index: number) => void;
};

const UpNext = ({
    switchNextUp,
    setOpen,
    open,
    upNext,
    setNextSong,
}: Props) => {
    const isPlaying = useRecoilState(isPlayingState)[0];
    const nextSongArr = useRecoilState(nextSongArrState)[0];
    const filteredSongs = nextSongArr.filter(
        (_, i) => i > isPlaying.index && i <= isPlaying.index + 3,
    );
    return (
        <div
            className={`${styles.nextSong} ${(open || upNext) && styles.visible} ${upNext && styles.active}`}
        >
            <p
                onClick={() => {
                    switchNextUp();
                    setOpen(!open);
                }}
                className={styles.heading}
            >
                Next Songs
            </p>
            <div className={styles.nextSongsWrap}>
                {filteredSongs.length ? (
                    filteredSongs.map((next, i) => (
                        <NextSongCard
                            key={i}
                            className={styles.nextSongCard}
                            arsitName={next.artistName}
                            image={next.image}
                            onClick={() => {
                                setNextSong(next.index);
                            }}
                            songName={next.name}
                        />
                    ))
                ) : (
                    <p>
                        No More Songs! <br></br>
                    </p>
                )}
            </div>
        </div>
    );
};

export default UpNext;
