'use client';
import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import styles from './MainPlayer.module.scss';
import { useState } from 'react';

import useViewport from '@/app/hooks/useViewport';
import PreviousNext from './PreviousNext/PreviousNext';
import Shuffle from './Shuffle/Shuffle';
import { useRecoilState } from 'recoil';
import { isPlayingState, nextSongArrState } from '@/app/states';
import PhonePlayer from './PhonePlayer/PhonePlayer';
import UpNext from './UpNext/UpNext';
import { useSwipeable } from 'react-swipeable';

const MainPlayer = () => {
    const [isShuffle, setIsShuffle] = useState(false);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const nextSongArr = useRecoilState(nextSongArrState)[0];

    const switchIsShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    // Phone Controls

    const isMobile = useViewport(768);
    const isTablet = useViewport(1300);

    const mobileControlsBottom = [
        RHAP_UI.ADDITIONAL_CONTROLS,
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.LOOP,
    ];

    const mobileVolume = !isMobile ? RHAP_UI.VOLUME : <></>;

    const mobileControls = !isMobile ? RHAP_UI.MAIN_CONTROLS : <></>;

    const mobileLoop = !isMobile ? RHAP_UI.LOOP : <></>;

    const mobileShuffle = !isMobile ? RHAP_UI.ADDITIONAL_CONTROLS : <></>;

    function playNext() {
        if (isPlaying.index + 1 < nextSongArr.length) {
            setIsPlaying(nextSongArr[isPlaying.index + 1]);
        }
    }

    function playPrev() {
        if (isPlaying.index - 1 >= 0) {
            setIsPlaying(nextSongArr[isPlaying.index - 1]);
        }
    }

    function switchNextUp() {
        setUpNext(!upNext);
    }

    const [open, setOpen] = useState(false);
    const [upNext, setUpNext] = useState(false);

    function setNextSong(index: number) {
        setIsPlaying(nextSongArr[index]);
    }

    const handlers = useSwipeable({
        onSwipedDown: () => {
            if (open) {
                setOpen(false);
            } else if (upNext) {
                setOpen(true);
                setUpNext(false);
            }
        },
        onSwipedUp: () => {
            if (!open && !upNext) {
                setOpen(true);
            } else {
                setUpNext(true);
                setOpen(false);
            }
        },
        preventScrollOnSwipe: true,
        delta: { down: 10 },
    });

    function shuffle() {
        if (isShuffle) {
            setIsPlaying(
                nextSongArr[Math.floor(Math.random() * nextSongArr.length)],
            );
        } else {
            playNext();
        }
    }

    // const [volume, setVolume] = useState(1);

    // function volumeCheck(e: React.ChangeEvent<HTMLAudioElement>) {
    //     setVolume(e.target.volume);
    // }cl

    return (
        <div className={styles.wrap} {...handlers}>
            <H5AudioPlayer
                className={`${styles.player} ${isPlaying.src && styles.active} ${open && isTablet && styles.mobileOpen} ${upNext && styles.upNextPlayer}`}
                // onVolumeChange={(e) => volumeCheck(e)}
                customControlsSection={isMobile ? mobileControlsBottom : []}
                customProgressBarSection={[
                    isTablet ? (
                        <PhonePlayer
                            openFunc={() => {
                                setOpen(true);
                                setUpNext(false);
                            }}
                            closeFunc={() => setOpen(false)}
                            artistName={isPlaying.artistName}
                            image={isPlaying.image}
                            name={isPlaying.name}
                            open={open}
                            upNext={upNext}
                        />
                    ) : (
                        <></>
                    ),
                    mobileControls,
                    RHAP_UI.CURRENT_TIME,
                    RHAP_UI.PROGRESS_BAR,
                    RHAP_UI.DURATION,
                    mobileShuffle,
                    mobileLoop,
                    mobileVolume,
                ]}
                customAdditionalControls={[
                    <Shuffle
                        key="shuffle"
                        onClick={switchIsShuffle}
                        isActive={isShuffle}
                    />,
                ]}
                onClickNext={playNext}
                onClickPrevious={playPrev}
                showSkipControls
                showJumpControls={false}
                src={isPlaying.src}
                onEnded={shuffle}
                customIcons={{
                    next: <PreviousNext key="next" />,
                    previous: <PreviousNext key="previous" isPrev />,
                    pause: (
                        <img
                            key="pause"
                            src="/icons/playerIcons/playing.svg"
                            className={styles.pause}
                            alt="icon"
                            draggable={false}
                        />
                    ),
                    play: (
                        <img
                            key="pause"
                            src="/icons/playerIcons/play.svg"
                            alt="icon"
                            className={styles.playing}
                            draggable={false}
                        />
                    ),
                    volume: (
                        <img
                            key="volume"
                            src="/icons/playerIcons/volume-high-solid.svg"
                            className={styles.play}
                            alt="icon"
                            draggable={false}
                        />
                    ),
                    volumeMute: (
                        <img
                            key="volumeMute"
                            src="/icons/playerIcons/volume-xmark-solid.svg"
                            className={styles.play}
                            alt="icon"
                            draggable={false}
                        />
                    ),
                    loopOff: (
                        <img
                            key="loopOff"
                            src="/icons/playerIcons/repeat-off.svg"
                            className={styles.loop}
                            alt="icon"
                            draggable={false}
                        />
                    ),
                    loop: (
                        <img
                            src="/icons/playerIcons/repeat.svg"
                            alt="icon"
                            className={styles.loopanim}
                            draggable={false}
                        />
                    ),
                }}
            />
            {isTablet && (
                <UpNext
                    open={open}
                    setOpen={setOpen}
                    switchNextUp={switchNextUp}
                    upNext={upNext}
                    setNextSong={setNextSong}
                />
            )}
        </div>
    );
};

export default MainPlayer;
