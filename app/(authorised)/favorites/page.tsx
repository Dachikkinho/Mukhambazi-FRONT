'use client';

import Favorites from '@/app/components/Favorites/Favorites';
import styles from './page.module.scss';
import { useEffect } from 'react';

const FavoriteSongs = () => {
    useEffect(() => {
        document.title = 'Chakrulos | Favorites';
    }, []);

    return (
        <main className={styles.main}>
            <Favorites />
        </main>
    );
};

export default FavoriteSongs;
