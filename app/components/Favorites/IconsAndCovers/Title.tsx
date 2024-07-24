'use client';

import styles from './Title.module.scss';

export const MainTitle = () => {
    return (
        <div className={styles.Container}>
            <img src={`/icons/Heart.png`} alt="ic" width={32} height={32} />
            <h4>Favorites</h4>
        </div>
    );
};

export default MainTitle;
