'use client'
import H5AudioPlayer, { RHAP_UI } from "react-h5-audio-player"
import { PreviousNext } from "./PreviousNext/PreviousNext";
import styles from "./MainPlayer.module.scss"
import { useState, useEffect } from "react";
import { Shuffle } from "./Shuffle/Shuffle";
import useViewport from "@/app/hooks/useViewport";



export default function MainPlayer () {
    const [isShuffle, setIsShuffle] = useState(false);
    
    const switchIsShuffle = () => {
        setIsShuffle(!isShuffle)
    }

    // Phone Controls

    const isMobile = useViewport(768);
    
    const mobileControlsBottom = [
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.VOLUME
    ]

    const mobileVolume = !isMobile ? RHAP_UI.VOLUME : <></>;

    const mobileControls = !isMobile ? RHAP_UI.MAIN_CONTROLS : <></>;

    return (
        <H5AudioPlayer 
        className={`${styles.player} ${styles.active}`} 
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
        customAdditionalControls={[<Shuffle onClick={switchIsShuffle} isActive={isShuffle}/>]}
        showSkipControls
        showJumpControls={false}
        src={""}
        customIcons={{
            next: <PreviousNext />,
            previous: <PreviousNext isPrev/>,
            pause: <img src="/icons/playerIcons/playing.svg" className={styles.pause} alt="icon"/>,
            volume: <img src="/icons/playerIcons/aduioOn.svg" className={styles.play} alt="icon"/>,
            volumeMute: <img src="/icons/playerIcons/audioOff.svg" className={styles.play} alt="icon"/>,
            loopOff: <img src="/icons/playerIcons/repeat-single 1.svg" className={styles.loop} alt="icon"/>,
        }}
        />
    )
}