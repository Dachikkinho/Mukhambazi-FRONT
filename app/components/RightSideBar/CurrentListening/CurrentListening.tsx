'use client';

import styles from './CurrentListening.module.scss';

type Props = {
    musicName: string;
};

export function CurrentListening({ musicName }: Props) {
    return (
        <div>
            <div className={styles.headingContainer}>
                <h4 className={styles.heading}>Currently Playing</h4>
                <img src="/icons/voice-rec.svg" alt="icon" draggable={false} />
            </div>

            <div className={styles.listeningCard}>
                <div className={styles.listeningIcon}>
                    <img
                        src="/icons/voice-rec-square-1.svg"
                        alt="icon"
                        draggable={false}
                    />
                </div>

                <p className={styles.playing}>Currently Playing</p>

                <h3 className={styles.listeningName}>{musicName}</h3>
            </div>
        </div>
    );
}

export default CurrentListening;
