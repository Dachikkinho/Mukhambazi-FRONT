'use client';
import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import styles from './MainPlayer.module.scss';
import { useState } from 'react';

import useViewport from '@/app/hooks/useViewport';
import PreviousNext from './PreviousNext/PreviousNext';
import Shuffle from './Shuffle/Shuffle';
import { useRecoilState } from 'recoil';
import { isPlayingState, nextSongArrState } from '@/app/states';

const MainPlayer = () => {
    const [isShuffle, setIsShuffle] = useState(false);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const nextSongArr = useRecoilState(nextSongArrState)[0];

    const switchIsShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    // Phone Controls

    const isMobile = useViewport(768);

    const mobileControlsBottom = [RHAP_UI.MAIN_CONTROLS];

    const mobileVolume = !isMobile ? RHAP_UI.VOLUME : <></>;

    const mobileControls = !isMobile ? RHAP_UI.MAIN_CONTROLS : <></>;

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

    return (
        <H5AudioPlayer
            className={`${styles.player} ${isPlaying.src && styles.active}`}
            customControlsSection={isMobile ? mobileControlsBottom : []}
            customProgressBarSection={[
                mobileControls,
                RHAP_UI.CURRENT_TIME,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.DURATION,
                RHAP_UI.ADDITIONAL_CONTROLS,
                RHAP_UI.LOOP,
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
            customIcons={{
                next: <PreviousNext key="next" />,
                previous: <PreviousNext key="previous" isPrev />,
                pause: (
                    <img
                        key="pause"
                        src="/icons/playerIcons/playing.svg"
                        className={styles.pause}
                        alt="icon"
                    />
                ),
                volume: (
                    <img
                        key="volume"
                        src="/icons/playerIcons/aduioOn.svg"
                        className={styles.play}
                        alt="icon"
                    />
                ),
                volumeMute: (
                    <img
                        key="volumeMute"
                        src="/icons/playerIcons/audioOff.svg"
                        className={styles.play}
                        alt="icon"
                    />
                ),
                loopOff: (
                    <img
                        key="loopOff"
                        src="/icons/playerIcons/repeat-single 1.svg"
                        className={styles.loop}
                        alt="icon"
                    />
                ),
            }}
        />
    );
};

export default MainPlayer;
